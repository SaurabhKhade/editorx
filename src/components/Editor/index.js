import React from "react";
import Ace from "react-ace";
import "ace-builds/webpack-resolver";
import { useConfig } from "../hooks";

// Ace Snippets
import "ace-builds/src-noconflict/snippets/actionscript";
import "ace-builds/src-noconflict/snippets/applescript";
import "ace-builds/src-noconflict/snippets/assembly_x86";
import "ace-builds/src-noconflict/snippets/batchfile";
import "ace-builds/src-noconflict/snippets/c_cpp";
import "ace-builds/src-noconflict/snippets/clojure";
import "ace-builds/src-noconflict/snippets/cobol";
import "ace-builds/src-noconflict/snippets/coffee";
import "ace-builds/src-noconflict/snippets/csharp";
import "ace-builds/src-noconflict/snippets/css";
import "ace-builds/src-noconflict/snippets/dart";
import "ace-builds/src-noconflict/snippets/dockerfile";
import "ace-builds/src-noconflict/snippets/dot";
import "ace-builds/src-noconflict/snippets/ejs";
import "ace-builds/src-noconflict/snippets/fortran";
import "ace-builds/src-noconflict/snippets/fsharp";
import "ace-builds/src-noconflict/snippets/gitignore";
import "ace-builds/src-noconflict/snippets/golang";
import "ace-builds/src-noconflict/snippets/graphqlschema";
import "ace-builds/src-noconflict/snippets/groovy";
import "ace-builds/src-noconflict/snippets/haml";
import "ace-builds/src-noconflict/snippets/haskell";
import "ace-builds/src-noconflict/snippets/html";
import "ace-builds/src-noconflict/snippets/jade";
import "ace-builds/src-noconflict/snippets/java";
import "ace-builds/src-noconflict/snippets/javascript";
import "ace-builds/src-noconflict/snippets/json";
import "ace-builds/src-noconflict/snippets/jsp";
import "ace-builds/src-noconflict/snippets/jsx";
import "ace-builds/src-noconflict/snippets/julia";
import "ace-builds/src-noconflict/snippets/kotlin";
import "ace-builds/src-noconflict/snippets/latex";
import "ace-builds/src-noconflict/snippets/less";
import "ace-builds/src-noconflict/snippets/livescript";
import "ace-builds/src-noconflict/snippets/lua";
import "ace-builds/src-noconflict/snippets/markdown";
import "ace-builds/src-noconflict/snippets/matlab";
import "ace-builds/src-noconflict/snippets/mysql";
import "ace-builds/src-noconflict/snippets/nginx";
import "ace-builds/src-noconflict/snippets/objectivec";
import "ace-builds/src-noconflict/snippets/pascal";
import "ace-builds/src-noconflict/snippets/perl";
import "ace-builds/src-noconflict/snippets/php";
import "ace-builds/src-noconflict/snippets/plain_text";
import "ace-builds/src-noconflict/snippets/powershell";
import "ace-builds/src-noconflict/snippets/prisma";
import "ace-builds/src-noconflict/snippets/python";
import "ace-builds/src-noconflict/snippets/r";
import "ace-builds/src-noconflict/snippets/redshift";
import "ace-builds/src-noconflict/snippets/ruby";
import "ace-builds/src-noconflict/snippets/rust";
import "ace-builds/src-noconflict/snippets/sass";
import "ace-builds/src-noconflict/snippets/scala";
import "ace-builds/src-noconflict/snippets/scss";
import "ace-builds/src-noconflict/snippets/sql";
import "ace-builds/src-noconflict/snippets/stylus";
import "ace-builds/src-noconflict/snippets/svg";
import "ace-builds/src-noconflict/snippets/swift";
import "ace-builds/src-noconflict/snippets/tsx";
import "ace-builds/src-noconflict/snippets/typescript";
import "ace-builds/src-noconflict/snippets/vbscript";
import "ace-builds/src-noconflict/snippets/xml";
import "ace-builds/src-noconflict/snippets/xquery";
import "ace-builds/src-noconflict/snippets/yaml";

// Language tools
import "ace-builds/src-noconflict/ext-language_tools"
import "ace-builds/src-noconflict/ext-keybinding_menu";

// Editor Code
export default function Editor({ language, placeholder, handleChange, code }) {
  let [config] = useConfig();
  return (
    <Ace
      mode={language}
      width="100%"
      height="100%"
      placeholder={placeholder}
      showPrintMargin={true}
      onChange={handleChange}
      value={code}
      {...config}
      editorProps={{ $blockScrolling: true }}
    />
  );
}
