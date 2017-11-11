package canvas

import (
	"bytes"
	"image"
	"image/color"
	"image/png"
	"log"
)

// Canvas holds all data
type Canvas struct {
	height, width uint16
	data          *image.RGBA
}

// NewCanvas initializes Canvases' data
func NewCanvas(height, width uint16) (*Canvas, error) {
	var c Canvas
	c.height = height
	c.width = width
	err := c.Reset()
	return &c, err
}

// Reset clears canvas data
func (c *Canvas) Reset() error {
	c.data = image.NewRGBA(image.Rect(0, 0, int(c.height), int(c.width)))

	for y := c.data.Rect.Min.Y; y < c.data.Rect.Max.Y; y++ {
		for x := c.data.Rect.Min.X; x < c.data.Rect.Max.X; x++ {
			c.data.Set(x, y, color.RGBA{0xff, 0xff, 0xff, 0xff})
		}
	}

	return nil
}

// Set pixel
func (c *Canvas) Set(x, y int, color color.Color) {
	c.data.Set(x, y, color)
}

// Render current canvas to PNG
func (c *Canvas) Render() *bytes.Buffer {
	buffer := new(bytes.Buffer)
	if err := png.Encode(buffer, c.data.SubImage(c.data.Rect)); err != nil {
		log.Fatalln("Unable to encode canvas")
	}

	return buffer
}
