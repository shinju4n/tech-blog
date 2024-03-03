import { FC } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";

interface ImageDialogProps {
  children: React.ReactNode;
  src: string;
  alt: string;
}

const ImageDialog: FC<ImageDialogProps> = ({ children, src, alt }) => {
  return (
    <Dialog>
      <DialogTrigger asChild className="cursor-zoom-in">
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-5xl flex justify-center items-center bg-background/30">
        <Image
          src={src || ""}
          alt={alt || ""}
          width={1000}
          height={1000}
          loading="lazy"
          sizes="(max-width: 768px) 50vw,(max-width: 1024px) 100vw"
        />
      </DialogContent>
    </Dialog>
  );
};
export default ImageDialog;
