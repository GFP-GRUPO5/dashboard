import { BASE_URL } from "../api";

export const uploadFile = async (file: File): Promise<string> => {
    try {
      const formData = new FormData();
      formData.append("file", file);
  
      const response = await fetch(`${BASE_URL}/files/upload`, {
        method: "POST",
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error("Erro ao fazer upload do recibo.");
      }
  
      const data = await response.json();
      return data.fileUrl;
    } catch (error) {
      console.error("Erro ao fazer upload do arquivo:", error);
      throw error;
    }
  };
  
  export const deleteFile = async (filename: string): Promise<void> => {
    try {
      await fetch(`${BASE_URL}/files/delete-file`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ filename }),
      });
    } catch (error) {
      console.error("Erro ao excluir arquivo:", error);
      throw error;
    }
  };
  