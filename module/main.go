package main

import (
	"os"
	"strconv"

	"github.com/g07cha/place/pkg/canvas"
	"github.com/g07cha/place/pkg/http"
	"google.golang.org/appengine"
)

const (
	defaultWidth  = 100
	defaultHeight = 100
)

func main() {
	width := parseEnvNumber("WIDTH", defaultWidth)
	height := parseEnvNumber("HEIGHT", defaultHeight)

	c, err := canvas.NewCanvas(width, height)

	if err != nil {
		panic(err)
	}

	http.ServeCanvas(c)
	appengine.Main()
}

func parseEnvNumber(envName string, defaultValue uint64) uint16 {
	if env := os.Getenv(envName); env != "" {
		val, err := strconv.ParseUint(env, 10, 16)
		if err != nil {
			val = defaultValue
		}

		return uint16(val)
	}

	return uint16(defaultValue)
}
