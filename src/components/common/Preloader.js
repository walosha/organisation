import Script from "next/script";
import React, { useEffect } from "react";

function Preloader() {
    useEffect(()=>{
        /*!
 * Particleground
 *
 * @author Jonathan Nicol - @mrjnicol
 * @version 1.1.0
 * @description Creates a canvas based particle system background
 *
 * Inspired by http://requestlab.fr/ and http://disruptivebydesign.com/
 */
!(function (a, b) {
    "use strict";
    function c(a) {
      a = a || {};
      for (var b = 1; b < arguments.length; b++) {
        var c = arguments[b];
        if (c)
          for (var d in c)
            c.hasOwnProperty(d) &&
              ("object" == typeof c[d] ? deepExtend(a[d], c[d]) : (a[d] = c[d]));
      }
      return a;
    }
    function d(d, g) {
      function h() {
        if (y) {
          (r = b.createElement("canvas")),
            (r.className = "pg-canvas"),
            (r.style.display = "block"),
            d.insertBefore(r, d.firstChild),
            (s = r.getContext("2d")),
            i();
          for (
            var c = Math.round((r.width * r.height) / g.density), e = 0;
            c > e;
            e++
          ) {
            var f = new n();
            f.setStackPos(e), z.push(f);
          }
          a.addEventListener(
            "resize",
            function () {
              k();
            },
            !1
          ),
            b.addEventListener(
              "mousemove",
              function (a) {
                (A = a.pageX), (B = a.pageY);
              },
              !1
            ),
            D &&
              !C &&
              a.addEventListener(
                "deviceorientation",
                function () {
                  (F = Math.min(Math.max(-event.beta, -30), 30)),
                    (E = Math.min(Math.max(-event.gamma, -30), 30));
                },
                !0
              ),
            j(),
            q("onInit");
        }
      }
      function i() {
        (r.width = d.offsetWidth),
          (r.height = d.offsetHeight),
          (s.fillStyle = g.dotColor),
          (s.strokeStyle = g.lineColor),
          (s.lineWidth = g.lineWidth);
      }
      function j() {
        if (y) {
          (u = a.innerWidth),
            (v = a.innerHeight),
            s.clearRect(0, 0, r.width, r.height);
          for (var b = 0; b < z.length; b++) z[b].updatePosition();
          for (var b = 0; b < z.length; b++) z[b].draw();
          G || (t = requestAnimationFrame(j));
        }
      }
      function k() {
        i();
        for (
          var a = d.offsetWidth, b = d.offsetHeight, c = z.length - 1;
          c >= 0;
          c--
        )
          (z[c].position.x > a || z[c].position.y > b) && z.splice(c, 1);
        var e = Math.round((r.width * r.height) / g.density);
        if (e > z.length)
          for (; e > z.length; ) {
            var f = new n();
            z.push(f);
          }
        else e < z.length && z.splice(e);
        for (c = z.length - 1; c >= 0; c--) z[c].setStackPos(c);
      }
      function l() {
        G = !0;
      }
      function m() {
        (G = !1), j();
      }
      function n() {
        switch (
          (this.stackPos,
          (this.active = !0),
          (this.layer = Math.ceil(3 * Math.random())),
          (this.parallaxOffsetX = 0),
          (this.parallaxOffsetY = 0),
          (this.position = {
            x: Math.ceil(Math.random() * r.width),
            y: Math.ceil(Math.random() * r.height),
          }),
          (this.speed = {}),
          g.directionX)
        ) {
          case "left":
            this.speed.x = +(
              -g.maxSpeedX +
              Math.random() * g.maxSpeedX -
              g.minSpeedX
            ).toFixed(2);
            break;
          case "right":
            this.speed.x = +(Math.random() * g.maxSpeedX + g.minSpeedX).toFixed(
              2
            );
            break;
          default:
            (this.speed.x = +(
              -g.maxSpeedX / 2 +
              Math.random() * g.maxSpeedX
            ).toFixed(2)),
              (this.speed.x += this.speed.x > 0 ? g.minSpeedX : -g.minSpeedX);
        }
        switch (g.directionY) {
          case "up":
            this.speed.y = +(
              -g.maxSpeedY +
              Math.random() * g.maxSpeedY -
              g.minSpeedY
            ).toFixed(2);
            break;
          case "down":
            this.speed.y = +(Math.random() * g.maxSpeedY + g.minSpeedY).toFixed(
              2
            );
            break;
          default:
            (this.speed.y = +(
              -g.maxSpeedY / 2 +
              Math.random() * g.maxSpeedY
            ).toFixed(2)),
              (this.speed.x += this.speed.y > 0 ? g.minSpeedY : -g.minSpeedY);
        }
      }
      function o(a, b) {
        return b ? void (g[a] = b) : g[a];
      }
      function p() {
        console.log("destroy"),
          r.parentNode.removeChild(r),
          q("onDestroy"),
          f && f(d).removeData("plugin_" + e);
      }
      function q(a) {
        void 0 !== g[a] && g[a].call(d);
      }
      var r,
        s,
        t,
        u,
        v,
        w,
        x,
        y = !!b.createElement("canvas").getContext,
        z = [],
        A = 0,
        B = 0,
        C = !navigator.userAgent.match(
          /(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i
        ),
        D = !!a.DeviceOrientationEvent,
        E = 0,
        F = 0,
        G = !1;
      return (
        (g = c({}, a[e].defaults, g)),
        (n.prototype.draw = function () {
          s.beginPath(),
            s.arc(
              this.position.x + this.parallaxOffsetX,
              this.position.y + this.parallaxOffsetY,
              g.particleRadius / 2,
              0,
              2 * Math.PI,
              !0
            ),
            s.closePath(),
            s.fill(),
            s.beginPath();
          for (var a = z.length - 1; a > this.stackPos; a--) {
            var b = z[a],
              c = this.position.x - b.position.x,
              d = this.position.y - b.position.y,
              e = Math.sqrt(c * c + d * d).toFixed(2);
            e < g.proximity &&
              (s.moveTo(
                this.position.x + this.parallaxOffsetX,
                this.position.y + this.parallaxOffsetY
              ),
              g.curvedLines
                ? s.quadraticCurveTo(
                    Math.max(b.position.x, b.position.x),
                    Math.min(b.position.y, b.position.y),
                    b.position.x + b.parallaxOffsetX,
                    b.position.y + b.parallaxOffsetY
                  )
                : s.lineTo(
                    b.position.x + b.parallaxOffsetX,
                    b.position.y + b.parallaxOffsetY
                  ));
          }
          s.stroke(), s.closePath();
        }),
        (n.prototype.updatePosition = function () {
          if (g.parallax) {
            if (D && !C) {
              var a = (u - 0) / 60;
              w = (E - -30) * a + 0;
              var b = (v - 0) / 60;
              x = (F - -30) * b + 0;
            } else (w = A), (x = B);
            (this.parallaxTargX =
              (w - u / 2) / (g.parallaxMultiplier * this.layer)),
              (this.parallaxOffsetX +=
                (this.parallaxTargX - this.parallaxOffsetX) / 10),
              (this.parallaxTargY =
                (x - v / 2) / (g.parallaxMultiplier * this.layer)),
              (this.parallaxOffsetY +=
                (this.parallaxTargY - this.parallaxOffsetY) / 10);
          }
          var c = d.offsetWidth,
            e = d.offsetHeight;
          switch (g.directionX) {
            case "left":
              this.position.x + this.speed.x + this.parallaxOffsetX < 0 &&
                (this.position.x = c - this.parallaxOffsetX);
              break;
            case "right":
              this.position.x + this.speed.x + this.parallaxOffsetX > c &&
                (this.position.x = 0 - this.parallaxOffsetX);
              break;
            default:
              (this.position.x + this.speed.x + this.parallaxOffsetX > c ||
                this.position.x + this.speed.x + this.parallaxOffsetX < 0) &&
                (this.speed.x = -this.speed.x);
          }
          switch (g.directionY) {
            case "up":
              this.position.y + this.speed.y + this.parallaxOffsetY < 0 &&
                (this.position.y = e - this.parallaxOffsetY);
              break;
            case "down":
              this.position.y + this.speed.y + this.parallaxOffsetY > e &&
                (this.position.y = 0 - this.parallaxOffsetY);
              break;
            default:
              (this.position.y + this.speed.y + this.parallaxOffsetY > e ||
                this.position.y + this.speed.y + this.parallaxOffsetY < 0) &&
                (this.speed.y = -this.speed.y);
          }
          (this.position.x += this.speed.x), (this.position.y += this.speed.y);
        }),
        (n.prototype.setStackPos = function (a) {
          this.stackPos = a;
        }),
        h(),
        { option: o, destroy: p, start: m, pause: l }
      );
    }
    var e = "particleground",
      f = a.jQuery;
    (a[e] = function (a, b) {
      return new d(a, b);
    }),
      (a[e].defaults = {
        minSpeedX: 0.1,
        maxSpeedX: 0.7,
        minSpeedY: 0.1,
        maxSpeedY: 0.7,
        directionX: "center",
        directionY: "center",
        density: 1e4,
        dotColor: "#666666",
        lineColor: "#666666",
        particleRadius: 7,
        lineWidth: 1,
        curvedLines: !1,
        proximity: 100,
        parallax: !0,
        parallaxMultiplier: 5,
        onInit: function () {},
        onDestroy: function () {},
      }),
      f &&
        (f.fn[e] = function (a) {
          if ("string" == typeof arguments[0]) {
            var b,
              c = arguments[0],
              g = Array.prototype.slice.call(arguments, 1);
            return (
              this.each(function () {
                f.data(this, "plugin_" + e) &&
                  "function" == typeof f.data(this, "plugin_" + e)[c] &&
                  (b = f.data(this, "plugin_" + e)[c].apply(this, g));
              }),
              void 0 !== b ? b : this
            );
          }
          return "object" != typeof a && a
            ? void 0
            : this.each(function () {
                f.data(this, "plugin_" + e) ||
                  f.data(this, "plugin_" + e, new d(this, a));
              });
        });
  })(window, document)
  /**
   * requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
   * @see: http://paulirish.com/2011/requestanimationframe-for-smart-animating/
   * @see: http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
   * @license: MIT license
   */,
    (function () {
      for (
        var a = 0, b = ["ms", "moz", "webkit", "o"], c = 0;
        c < b.length && !window.requestAnimationFrame;
        ++c
      )
        (window.requestAnimationFrame = window[b[c] + "RequestAnimationFrame"]),
          (window.cancelAnimationFrame =
            window[b[c] + "CancelAnimationFrame"] ||
            window[b[c] + "CancelRequestAnimationFrame"]);
      window.requestAnimationFrame ||
        (window.requestAnimationFrame = function (b) {
          var c = new Date().getTime(),
            d = Math.max(0, 16 - (c - a)),
            e = window.setTimeout(function () {
              b(c + d);
            }, d);
          return (a = c + d), e;
        }),
        window.cancelAnimationFrame ||
          (window.cancelAnimationFrame = function (a) {
            clearTimeout(a);
          });
    })();
  
  particleground(document.getElementById("particles-foreground"), {
    dotColor: "rgba(6, 216, 137, 1)",
    lineColor: "rgba(6, 216, 137, 0.1)",
    minSpeedX: 0.3,
    maxSpeedX: 0.6,
    minSpeedY: 0.3,
    maxSpeedY: 0.6,
    density: 50000, // One particle every n pixels
    curvedLines: false,
    proximity: 250, // How close two dots need to be before they join
    parallaxMultiplier: 10, // Lower the number is more extreme parallax
    particleRadius: 4, // Dot size
  });
  
  particleground(document.getElementById("particles-background"), {
    dotColor: "rgba(6, 216, 137, 0.5)",
    lineColor: "rgba(6, 216, 137, 0.1)",
    minSpeedX: 0.075,
    maxSpeedX: 0.15,
    minSpeedY: 0.075,
    maxSpeedY: 0.15,
    density: 30000, // One particle every n pixels
    curvedLines: false,
    proximity: 20, // How close two dots need to be before they join
    parallaxMultiplier: 20, // Lower the number is more extreme parallax
    particleRadius: 2, // Dot size
  });
  
    })
  return (
    <div className="preloader">
    <div id="particles-background" className="vertical-centered-box" />
    <div id="particles-foreground" className="vertical-centered-box" />
    <div className="vertical-centered-box">
      <div className="content">
        <div className="loader-circle" />
        <div className="loader-line-mask">
          <div className="loader-line" />
        </div>
        <svg width={50} height={50} viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M31.5875 7.80132C26.1756 2.71548 18.9772 3.33531 13.0177 7.36702C12.9433 7.45181 12.4808 7.69025 12.9963 6.94836C24.4371 -5.54919 45.4795 11.5151 33.7252 25.7347C36.3568 20.0872 37.0161 12.9032 31.5879 7.80144L31.5875 7.80132Z" fill="#06D889" />
          <path fillRule="evenodd" clipRule="evenodd" d="M26.7504 1.91075C8.15888 -3.63601 -7.81139 25.1051 12.8958 38C-10.3418 27.992 1.07241 -2.40195 21.5296 0.151704C23.1991 0.358215 25.7562 1.14769 26.7503 1.91051L26.7504 1.91075Z" fill="#06D889" />
          <path fillRule="evenodd" clipRule="evenodd" d="M31.656 20.3691C31.656 26.5676 26.6425 31.6058 20.4701 31.6058C14.2923 31.6058 9.2793 26.5675 9.2793 20.3691C9.2793 14.1705 14.2928 9.13232 20.4701 9.13232C26.6425 9.13232 31.656 14.1706 31.656 20.3691ZM12.2671 21.8578C11.4325 23.1348 12.4106 26.377 15.3081 28.2948C18.1789 30.2125 21.8579 30.0695 22.7139 28.7876C23.5485 27.5373 21.7676 28.3426 18.514 27.1345C13.1444 25.1426 13.0966 20.5759 12.2671 21.8578Z" fill="#06D889" />
          <path fillRule="evenodd" clipRule="evenodd" d="M38.395 13.1796C46.0027 27.7854 24.886 46.5405 10.1649 33.2636C8.28281 31.579 7.45359 29.9525 6.08203 27.8385C17.5284 43.6315 42.7177 31.1549 38.1986 13.4121C38.0338 12.7603 38.1402 12.7021 38.3952 13.179L38.395 13.1796Z" fill="#06D889" />
        </svg>
      </div>
    </div>
  </div>
  
  );
}

export default Preloader;
