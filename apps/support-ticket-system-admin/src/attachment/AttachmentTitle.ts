import { Attachment as TAttachment } from "../api/attachment/Attachment";

export const ATTACHMENT_TITLE_FIELD = "id";

export const AttachmentTitle = (record: TAttachment): string => {
  return record.id?.toString() || String(record.id);
};
