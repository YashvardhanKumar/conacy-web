import { BadRequestException, Injectable } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';
import { DateTime } from 'neo4j-driver';
import { CloudinaryService } from 'src/custom/cloudinary/cloudinary.service';
import * as streamifier from 'streamifier';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET_KEY,
});

@Injectable()
export class PostsService {
  constructor(private cloudinary: CloudinaryService) {}
  async uploadImageToCloudinary(file: Express.Multer.File) {
    return this.cloudinary
      .uploadFile(file, {
        folder: 'uploads',
        format: file.mimetype.split('/')[1],
      })
      .catch(() => {
        throw new BadRequestException('Invalid file type.');
      });
  }
}
