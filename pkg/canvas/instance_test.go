package canvas

import (
	"testing"
)

func TestCreateInstance(t *testing.T) {
	var (
		height uint16 = 10
		width  uint16 = 10
	)
	i, err := NewCanvas(height, width)
	if err != nil {
		t.Errorf("Unexpected error when creating cluster %s", err)
	}

	if i.data.Rect.Max.Y != int(height) {
		t.Errorf("Incorrect canvas height, expected %d but got %d", height, i.data.Rect.Max.Y)
	}

	if i.data.Rect.Max.X != int(width) {
		t.Errorf("Incorrect canvas width, expected %d but got %d", width, i.data.Rect.Max.X)
	}
}
