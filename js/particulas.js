// document.addEventListener('DOMContentLoaded', function() {
//   const body = document.querySelector('body');
//   const canvas = document.querySelector('canvas');
//   console.log(canvas);
//   body.style.position = 'relative';
//   canvas.style.position = 'absolute';
//   canvas.style.top = 0;
// });

var particleNb = 75;

particlesJS('particles-js', {
    particles: {
      color: '#fff',
      shape: 'circle', // "circle", "edge" or "triangle"
      opacity: 1,
      size: 3,
      size_random: true,
      nb: particleNb,
      line_linked: {
        enable_auto: true,
        distance: 100,
        color: '#fff',
        opacity: 1,
        width: 1,
        condensed_mode: {
          enable: false,
          rotateX: 600,
          rotateY: 600
        }
      },
      anim: {
        enable: true,
        speed: 2
      }
    },
    interactivity: {
      enable: true,
      mouse: {
        distance: 300
      },
      detect_on: 'canvas', // "canvas" or "window"
      mode: 'grab',
      line_linked: {
        opacity: .5
      },
      events: {
        onclick: {
          enable: true,
          mode: 'push', // "push" or "remove"
          nb: 1
        }
      }
    },
    /* Retina Display Support */
    retina_detect: true
  });