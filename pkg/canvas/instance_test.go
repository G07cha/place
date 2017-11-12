package canvas

import (
	"image/color"
	"testing"
)

const (
	height uint16 = 10
	width  uint16 = 10
)

func TestCreateInstance(t *testing.T) {
	i, err := NewCanvas(height, width)
	if err != nil {
		t.Errorf("Unexpected error when creating canvas %s", err)
	}

	if i.data.Rect.Max.Y != int(height) {
		t.Errorf("Incorrect canvas height, expected %d but got %d", height, i.data.Rect.Max.Y)
	}

	if i.data.Rect.Max.X != int(width) {
		t.Errorf("Incorrect canvas width, expected %d but got %d", width, i.data.Rect.Max.X)
	}
}

func TestSetPixel(t *testing.T) {
	i, err := NewCanvas(height, width)
	if err != nil {
		t.Errorf("Unexpected error when creating canvas %s", err)
	}

	c := color.RGBA{1, 1, 1, 1}
	i.Set(1, 1, c)
	pixel := i.data.At(1, 1)
	r, g, b, a := pixel.RGBA()
	resultColor := color.RGBA{uint8(r), uint8(g), uint8(b), uint8(a)}
	if resultColor != c {
		t.Errorf("Incorrect color at target pixel, expected %v but got %v", c, resultColor)
	}
}
