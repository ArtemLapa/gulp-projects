(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var menuBtn = document.querySelector('.header__menu-btn'),
    navMenuWrapper = document.querySelector('.header__navigation-menu-wrapper');
menuBtn.addEventListener('click', function (event) {
  event.preventDefault;
  menuBtn.classList.toggle('header__menu-btn--active');
  navMenuWrapper.classList.toggle('header__navigation-menu-wrapper--active');
});

},{}]},{},[1])

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwcm9qZWN0cy9zbWFydC9zcmMvanMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixtQkFBdkIsQ0FBaEI7QUFBQSxJQUNFLGNBQWMsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixrQ0FBdkIsQ0FEbkI7QUFHQSxPQUFPLENBQUMsZ0JBQVIsQ0FBeUIsT0FBekIsRUFBa0MsVUFBVSxLQUFWLEVBQWlCO0FBQ2pELEVBQUEsS0FBSyxDQUFDLGNBQU47QUFDQSxFQUFBLE9BQU8sQ0FBQyxTQUFSLENBQWtCLE1BQWxCLENBQXlCLDBCQUF6QjtBQUNBLEVBQUEsY0FBYyxDQUFDLFNBQWYsQ0FBeUIsTUFBekIsQ0FBZ0MseUNBQWhDO0FBQ0QsQ0FKRCIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX21lbnUtYnRuJyksXHJcbiAgbmF2TWVudVdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19uYXZpZ2F0aW9uLW1lbnUtd3JhcHBlcicpO1xyXG5cclxubWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0O1xyXG4gIG1lbnVCdG4uY2xhc3NMaXN0LnRvZ2dsZSgnaGVhZGVyX19tZW51LWJ0bi0tYWN0aXZlJyk7XHJcbiAgbmF2TWVudVdyYXBwZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaGVhZGVyX19uYXZpZ2F0aW9uLW1lbnUtd3JhcHBlci0tYWN0aXZlJyk7XHJcbn0pOyJdLCJwcmVFeGlzdGluZ0NvbW1lbnQiOiIvLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbTV2WkdWZmJXOWtkV3hsY3k5aWNtOTNjMlZ5TFhCaFkyc3ZYM0J5Wld4MVpHVXVhbk1pTENKd2NtOXFaV04wY3k5emJXRnlkQzl6Y21NdmFuTXZZWEJ3TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lKQlFVRkJPenM3UVVOQlFTeEpRVUZOTEU5QlFVOHNSMEZCUnl4UlFVRlJMRU5CUVVNc1lVRkJWQ3hEUVVGMVFpeHRRa0ZCZGtJc1EwRkJhRUk3UVVGQlFTeEpRVU5GTEdOQlFXTXNSMEZCUnl4UlFVRlJMRU5CUVVNc1lVRkJWQ3hEUVVGMVFpeHJRMEZCZGtJc1EwRkVia0k3UVVGSFFTeFBRVUZQTEVOQlFVTXNaMEpCUVZJc1EwRkJlVUlzVDBGQmVrSXNSVUZCYTBNc1ZVRkJWU3hMUVVGV0xFVkJRV2xDTzBGQlEycEVMRVZCUVVFc1MwRkJTeXhEUVVGRExHTkJRVTQ3UVVGRFFTeEZRVUZCTEU5QlFVOHNRMEZCUXl4VFFVRlNMRU5CUVd0Q0xFMUJRV3hDTEVOQlFYbENMREJDUVVGNlFqdEJRVU5CTEVWQlFVRXNZMEZCWXl4RFFVRkRMRk5CUVdZc1EwRkJlVUlzVFVGQmVrSXNRMEZCWjBNc2VVTkJRV2hETzBGQlEwUXNRMEZLUkNJc0ltWnBiR1VpT2lKblpXNWxjbUYwWldRdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lLR1oxYm1OMGFXOXVLQ2w3Wm5WdVkzUnBiMjRnY2lobExHNHNkQ2w3Wm5WdVkzUnBiMjRnYnlocExHWXBlMmxtS0NGdVcybGRLWHRwWmlnaFpWdHBYU2w3ZG1GeUlHTTlYQ0ptZFc1amRHbHZibHdpUFQxMGVYQmxiMllnY21WeGRXbHlaU1ltY21WeGRXbHlaVHRwWmlnaFppWW1ZeWx5WlhSMWNtNGdZeWhwTENFd0tUdHBaaWgxS1hKbGRIVnliaUIxS0drc0lUQXBPM1poY2lCaFBXNWxkeUJGY25KdmNpaGNJa05oYm01dmRDQm1hVzVrSUcxdlpIVnNaU0FuWENJcmFTdGNJaWRjSWlrN2RHaHliM2NnWVM1amIyUmxQVndpVFU5RVZVeEZYMDVQVkY5R1QxVk9SRndpTEdGOWRtRnlJSEE5Ymx0cFhUMTdaWGh3YjNKMGN6cDdmWDA3WlZ0cFhWc3dYUzVqWVd4c0tIQXVaWGh3YjNKMGN5eG1kVzVqZEdsdmJpaHlLWHQyWVhJZ2JqMWxXMmxkV3pGZFczSmRPM0psZEhWeWJpQnZLRzU4ZkhJcGZTeHdMSEF1Wlhod2IzSjBjeXh5TEdVc2JpeDBLWDF5WlhSMWNtNGdibHRwWFM1bGVIQnZjblJ6ZldadmNpaDJZWElnZFQxY0ltWjFibU4wYVc5dVhDSTlQWFI1Y0dWdlppQnlaWEYxYVhKbEppWnlaWEYxYVhKbExHazlNRHRwUEhRdWJHVnVaM1JvTzJrckt5bHZLSFJiYVYwcE8zSmxkSFZ5YmlCdmZYSmxkSFZ5YmlCeWZTa29LU0lzSW1OdmJuTjBJRzFsYm5WQ2RHNGdQU0JrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eUtDY3VhR1ZoWkdWeVgxOXRaVzUxTFdKMGJpY3BMRnh5WEc0Z0lHNWhkazFsYm5WWGNtRndjR1Z5SUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWduTG1obFlXUmxjbDlmYm1GMmFXZGhkR2x2YmkxdFpXNTFMWGR5WVhCd1pYSW5LVHRjY2x4dVhISmNibTFsYm5WQ2RHNHVZV1JrUlhabGJuUk1hWE4wWlc1bGNpZ25ZMnhwWTJzbkxDQm1kVzVqZEdsdmJpQW9aWFpsYm5RcElIdGNjbHh1SUNCbGRtVnVkQzV3Y21WMlpXNTBSR1ZtWVhWc2REdGNjbHh1SUNCdFpXNTFRblJ1TG1Oc1lYTnpUR2x6ZEM1MGIyZG5iR1VvSjJobFlXUmxjbDlmYldWdWRTMWlkRzR0TFdGamRHbDJaU2NwTzF4eVhHNGdJRzVoZGsxbGJuVlhjbUZ3Y0dWeUxtTnNZWE56VEdsemRDNTBiMmRuYkdVb0oyaGxZV1JsY2w5ZmJtRjJhV2RoZEdsdmJpMXRaVzUxTFhkeVlYQndaWEl0TFdGamRHbDJaU2NwTzF4eVhHNTlLVHNpWFgwPSJ9
