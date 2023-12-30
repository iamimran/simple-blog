import { Editor } from "@tinymce/tinymce-react";

function RealtimeEditor() {
  return (
    <Editor
      initialValue="default value"
      init={{ branding: false, height: 500 }}
    />
  );
}

export default RealtimeEditor;
