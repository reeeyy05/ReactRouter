export interface StorageRepository {
    uploadImage(bucketName: string, filePath: string, file: File): Promise<{ data?: { publicUrl: string }; error?: any; }>;
    getPublicUrl(bucketName: string, filePath: string): Promise<{ data: { publicUrl: string } }>;
}