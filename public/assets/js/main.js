// ==========================================================================
// js/main.js
// ==========================================================================

// Import vendor libraries.
import './vendors/jquery/jquery-3.7.1.min.js';
import './vendors/notifi/notifi.min.js';

// Import controllers.
import { GeneratorController } from "./modules/controllers/GeneratorController.js";
import { AccountsController } from "./modules/controllers/AccountsController.js";
import { LibraryController } from "./modules/controllers/LibraryController.js";
import { GalleryController } from "./modules/controllers/GalleryController.js";

// Initialize controllers.
const generatorController = new GeneratorController();
const accountsController = new AccountsController();
const libraryController = new LibraryController();
const galleryController = new GalleryController();

// Trigger resize event to adjust layout on page load.
window.dispatchEvent(new Event('resize'));