import React, { forwardRef } from 'react'
import { FileUpload as ArkFileUpload } from '@ark-ui/react/file-upload'
import {
  fileUploadRoot, fileUploadLabel, fileUploadDropzone, fileUploadTrigger,
  fileUploadItemGroup, fileUploadItem, fileUploadItemName, fileUploadItemSizeText,
  fileUploadItemDeleteTrigger,
} from './file-upload.recipe'
import { cx } from '@/styled-system/css'

type FileUploadProps = Omit<ArkFileUpload.RootProps, 'className'> & {
  label?: string
  className?: string
}

const FileUploadRoot = forwardRef<HTMLDivElement, FileUploadProps>(
  ({ label, className, ...rootProps }, ref) => {
    return (
      <ArkFileUpload.Root ref={ref} className={cx(fileUploadRoot, className)} {...rootProps}>
        {label && <ArkFileUpload.Label className={fileUploadLabel}>{label}</ArkFileUpload.Label>}
        <ArkFileUpload.Dropzone className={fileUploadDropzone}>
          <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" y1="3" x2="12" y2="15" />
          </svg>
          Drag & drop or <ArkFileUpload.Trigger className={fileUploadTrigger}>browse</ArkFileUpload.Trigger>
        </ArkFileUpload.Dropzone>
        <ArkFileUpload.ItemGroup className={fileUploadItemGroup}>
          <ArkFileUpload.Context>
            {({ acceptedFiles }) =>
              acceptedFiles.map((file) => (
                <ArkFileUpload.Item key={file.name} file={file} className={fileUploadItem}>
                  <ArkFileUpload.ItemName className={fileUploadItemName}>{file.name}</ArkFileUpload.ItemName>
                  <ArkFileUpload.ItemSizeText className={fileUploadItemSizeText} />
                  <ArkFileUpload.ItemDeleteTrigger className={fileUploadItemDeleteTrigger}>
                    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </ArkFileUpload.ItemDeleteTrigger>
                </ArkFileUpload.Item>
              ))
            }
          </ArkFileUpload.Context>
        </ArkFileUpload.ItemGroup>
        <ArkFileUpload.HiddenInput />
      </ArkFileUpload.Root>
    )
  }
)
FileUploadRoot.displayName = 'FileUpload'

export const FileUpload = FileUploadRoot
