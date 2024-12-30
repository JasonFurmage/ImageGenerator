// ==========================================================================
// js/main.js
// ==========================================================================

import './vendors/jquery/jquery-3.7.1.min.js';
import './vendors/notifi/notifi.min.js';

import { GeneratorController } from "./modules/controllers/GeneratorController.js";
import { AccountsController } from "./modules/controllers/AccountsController.js";
import { LibraryController } from "./modules/controllers/LibraryController.js";
import { GalleryController } from "./modules/controllers/GalleryController.js";

const generatorController = new GeneratorController();
const accountsController = new AccountsController();
const libraryController = new LibraryController();
const galleryController = new GalleryController();

window.dispatchEvent(new Event('resize'));