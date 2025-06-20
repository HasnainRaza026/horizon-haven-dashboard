import { supabase, supabaseUrl } from "./supabase";

export function getImageUrl(bucket: string, imageName: string) {
  const { data: imageUrl } = supabase.storage
    .from(bucket)
    .getPublicUrl(`${imageName}`);

  const publicUrl = imageUrl
    ? imageUrl.publicUrl
    : `${supabaseUrl}/storage/v1/object/public/${bucket}/${imageName}`;

  return publicUrl;
}

export async function addImage(bucket: string, imageName: string, image: File) {
  const { error: storageError } = await supabase.storage
    .from(bucket)
    .upload(imageName, image, {
      cacheControl: "3600",
      upsert: false,
    });

  if (storageError) {
    console.log(storageError);
    throw new Error("Image could not be uploaded");
  }
}
export async function deleteImage(bucket: string, imageName: string) {
  const { error } = await supabase.storage
    .from(bucket)
    .remove([`${imageName}`]);

  if (error) {
    console.log(error);
    throw new Error("Image could not be deleted");
  }
}
export async function replaceImage(
  bucket: string,
  imageName: string,
  newImage: File,
) {
  const { error } = await supabase.storage
    .from(bucket)
    .update(imageName, newImage, {
      cacheControl: "3600",
      upsert: true,
    });

  if (error) {
    console.log(error);
    throw new Error("Image could not be replaced");
  }
}
