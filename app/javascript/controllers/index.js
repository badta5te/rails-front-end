// This file is auto-generated by ./bin/rails stimulus:manifest:update
// Run that command whenever you add a new controller or create them with
// ./bin/rails generate stimulus controllerName

import { application } from "./application"

import CssController from "./css_controller.ts"
application.register("css", CssController)

import FavoriteToggleController from "./favorite_toggle_controller.ts"
application.register("favorite-toggle", FavoriteToggleController)

import TextController from "./text_controller.ts"
application.register("text", TextController)
