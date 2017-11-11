package http

import (
	"encoding/json"
	"image/color"
	"net/http"

	"github.com/g07cha/place/pkg/canvas"
)

// Srv creates set of handlers
type Srv struct {
	canvas *canvas.Canvas
}

type setPixelForm struct {
	X     int        `json:"x"`
	Y     int        `json:"y"`
	Color color.RGBA `json:"color"`
}

// ServeCanvas links canvas with HTTP handlers
func ServeCanvas(c *canvas.Canvas) Srv {
	s := Srv{c}
	registerHandlers(&s)

	return s
}

func (s *Srv) canvasHandler(w http.ResponseWriter, r *http.Request) {
	w.Write(s.canvas.Render().Bytes())
}

func (s *Srv) setPixelHandler(w http.ResponseWriter, r *http.Request) {
	var form setPixelForm
	err := json.NewDecoder(r.Body).Decode(&form)
	if err != nil {
		http.Error(w, "Incorrect request", http.StatusBadRequest)
		return
	}

	s.canvas.Set(form.X, form.Y, form.Color)
	s.canvasHandler(w, r)
}

func registerHandlers(s *Srv) {
	http.HandleFunc("/canvas", s.canvasHandler)
	http.HandleFunc("/set", s.setPixelHandler)
	http.HandleFunc("/_ah/health", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("ok"))
	})
}
