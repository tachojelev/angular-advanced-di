import { InjectionToken } from "@angular/core";
import { VenicleDefaultOptions } from "../models/venicle-default-options.model";

export const VENICLE_TOKEN = new InjectionToken<VenicleDefaultOptions>('venicle-options');
