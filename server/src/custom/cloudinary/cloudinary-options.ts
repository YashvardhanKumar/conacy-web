import type { ConfigOptions } from 'cloudinary';

export interface ISignedUploadUrlOptions {
  folder?: string;
  eager?: string;
}

export const defaultCreateSignedUploadUrlOptions: Partial<ISignedUploadUrlOptions> =
  {
    folder: undefined,
    eager: undefined,
  };

export type CloudinaryModuleOptions = ConfigOptions;
