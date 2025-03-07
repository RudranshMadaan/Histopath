import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import Image from "next/image"

export default function ResultsPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <Card className="mx-auto max-w-4xl">
        <CardHeader>
          <CardTitle>Image Analysis Results</CardTitle>
          <CardDescription>Below are the results generated from the uploaded histopathology image</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="aspect-video relative rounded-lg overflow-hidden">
            <Image src="/placeholder.svg" alt="Analyzed Image" fill className="object-cover" />
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Analysis Summary</h3>
              <div className="grid gap-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Detection</span>
                    <span className="text-primary">Abnormal cell growth detected</span>
                  </div>
                  <Progress value={95} className="h-2" />
                  <div className="flex justify-between mt-1">
                    <span className="text-sm text-muted-foreground">Confidence Score</span>
                    <span className="text-sm font-medium">95%</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Recommended Action</h4>
              <p className="text-muted-foreground">
                Further review suggested. Please consult with a specialist for confirmation and to discuss potential
                treatment options.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

