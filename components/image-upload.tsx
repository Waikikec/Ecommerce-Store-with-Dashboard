"use client";

import { Button } from "@/components/ui/button";
import { ImagePlusIcon, TrashIcon } from "lucide-react";
import { CldUploadWidget } from 'next-cloudinary';
import Image from "next/image";
import { useEffect, useState } from "react";

interface ImageUploadProps {
  disabled?: boolean;
  onChange: (value: string) => void;
  onRemove: (value: string) => void;
  value: string[];
}

const ImageUpload = ({
  disabled, onChange, onRemove, value
}: ImageUploadProps
) => {

  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const onUpload = (result: any) => {
    onChange(result.info.secure_url);
  }

  if (!isMounted) {
    return null;
  }

  return (
    <div>
      <div className="mb-4 flex items-center gap-4">
        {value.map((url) => (
          <div key={url} className="relative w-[200px] h-[200px] rounded-md overflow-hidden">
            <div className="z-10 absolute top-2 right-2">
              <Button
                type="button"
                variant={"destructive"}
                size={"sm"}
                onClick={() => onRemove(url)}
              >
                <TrashIcon className="h-4 w-4" />
              </Button>
            </div>
            <Image
              fill
              className="object-cover"
              alt="image"
              src={url}
            />
          </div>
        ))}
      </div>

      <CldUploadWidget onSuccess={onUpload} uploadPreset="ecommerce-admin">
        {({ open }) => {
          return (
            <Button
              type="button"
              variant={"secondary"}
              disabled={disabled}
              onClick={() => open()}
            >
              <ImagePlusIcon className="h-4 w-4 mr-2" />
              Upload an Image
            </Button>
          );
        }}
      </CldUploadWidget>

    </div>
  )
}

export default ImageUpload;