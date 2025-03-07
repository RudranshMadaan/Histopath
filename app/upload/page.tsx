"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Upload } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function UploadPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const router = useRouter()

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedFile(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleUpload = async () => {
    if (!selectedFile) return
    setIsUploading(true)
    // Simulating upload and analysis
    setTimeout(() => {
      setIsUploading(false)
      router.push("/results")
    }, 2000)
  }

  return (
    <div className="container mx-auto px-4 py-24">
      <Card className="mx-auto max-w-2xl">
        <CardHeader>
          <CardTitle>Upload Your Image</CardTitle>
          <CardDescription>
            Upload a histopathology image for analysis. Supported formats: JPG, PNG, TIFF
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-12 text-center">
              <Input type="file" accept="image/*" onChange={handleFileSelect} className="hidden" id="file-upload" />
              <label htmlFor="file-upload" className="flex flex-col items-center space-y-4 cursor-pointer">
                <Upload className="h-12 w-12 text-muted-foreground" />
                <div className="space-y-2">
                  <p className="text-sm font-medium">Drag and drop or click to upload</p>
                  <p className="text-xs text-muted-foreground">Maximum file size: 10MB</p>
                </div>
              </label>
            </div>

            {preview && (
              <div className="space-y-4">
                <div className="aspect-video relative rounded-lg overflow-hidden">
                  <Image src={preview || "/placeholder.svg"} alt="Preview" fill className="object-cover" />
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-muted-foreground">{selectedFile?.name}</p>
                  <Button onClick={handleUpload} disabled={isUploading}>
                    {isUploading ? "Analyzing..." : "Analyze Image"}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

