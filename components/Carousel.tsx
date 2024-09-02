'use client'

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

interface Image {
  src: string;
  alt: string;
}

interface ImageCarouselProps {
  images: Image[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto mb-12">
      <div className="overflow-hidden rounded-lg">
        <h1 className='text-3xl font-bold mb-5'>Gallery</h1>
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="w-full h-64 object-cover"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <Button variant="outline" size="icon" onClick={prevImage}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={nextImage}>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
      <div className="absolute bottom-4 right-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="icon">
              <ZoomIn className="h-4 w-4" />
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl">
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="w-full h-auto"
            />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default function CarouselDemo() {
  const images = [
    { src: "https://www.jodiekennedy.com/images/EEC8D764-EBC7-436C-8F34-89A7B4FAF872_1_105_c-p-500.jpeg", alt: "Image 1" },
    { src: "https://www.jodiekennedy.com/images/096740C0-FE0D-4B7A-B951-E43FB54FB495_1_105_c-p-500.jpeg", alt: "Image 2" },
    { src: "https://www.jodiekennedy.com/images/69D5C049-2036-49EC-B33E-A46ED46B7519_1_105_c-p-500.jpeg", alt: "Image 3" },
    { src: "https://www.jodiekennedy.com/images/F8D28460-C50E-46AF-9EFF-D0B1AEB4A28D_1_105_c-p-500.jpeg", alt: "Image 4" },
  ];

  return <ImageCarousel images={images} />;
}