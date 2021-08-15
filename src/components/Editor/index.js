import React from "react";
import Ace from "react-ace";


// for actual code, skip to end of this page
// Ace Modes
import "ace-builds/src-noconflict/mode-actionscript";
import "ace-builds/src-noconflict/mode-applescript";
import "ace-builds/src-noconflict/mode-assembly_x86";
import "ace-builds/src-noconflict/mode-batchfile";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-clojure";
import "ace-builds/src-noconflict/mode-cobol";
import "ace-builds/src-noconflict/mode-coffee";
import "ace-builds/src-noconflict/mode-csharp";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-dart";
import "ace-builds/src-noconflict/mode-dockerfile";
import "ace-builds/src-noconflict/mode-dot";
import "ace-builds/src-noconflict/mode-fortran";
import "ace-builds/src-noconflict/mode-fsharp";
import "ace-builds/src-noconflict/mode-gitignore";
import "ace-builds/src-noconflict/mode-golang";
import "ace-builds/src-noconflict/mode-graphqlschema";
import "ace-builds/src-noconflict/mode-groovy";
import "ace-builds/src-noconflict/mode-haml";
import "ace-builds/src-noconflict/mode-haskell";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-jade";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/mode-jsp";
import "ace-builds/src-noconflict/mode-jsx";
import "ace-builds/src-noconflict/mode-julia";
import "ace-builds/src-noconflict/mode-kotlin";
import "ace-builds/src-noconflict/mode-latex";
import "ace-builds/src-noconflict/mode-less";
import "ace-builds/src-noconflict/mode-livescript";
import "ace-builds/src-noconflict/mode-lua";
import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/mode-matlab";
import "ace-builds/src-noconflict/mode-objectivec";
import "ace-builds/src-noconflict/mode-pascal";
import "ace-builds/src-noconflict/mode-perl";
import "ace-builds/src-noconflict/mode-php";
import "ace-builds/src-noconflict/mode-plain_text";
import "ace-builds/src-noconflict/mode-powershell";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-r";
import "ace-builds/src-noconflict/mode-ruby";
import "ace-builds/src-noconflict/mode-rust";
import "ace-builds/src-noconflict/mode-sass";
import "ace-builds/src-noconflict/mode-scala";
import "ace-builds/src-noconflict/mode-scss";
import "ace-builds/src-noconflict/mode-sql";
import "ace-builds/src-noconflict/mode-sqlserver";
import "ace-builds/src-noconflict/mode-stylus";
import "ace-builds/src-noconflict/mode-svg";
import "ace-builds/src-noconflict/mode-swift";
import "ace-builds/src-noconflict/mode-tsx";
import "ace-builds/src-noconflict/mode-typescript";
import "ace-builds/src-noconflict/mode-vbscript";
import "ace-builds/src-noconflict/mode-xml";
import "ace-builds/src-noconflict/mode-xquery";
import "ace-builds/src-noconflict/mode-yaml";



// Keybindings
import "ace-builds/src-noconflict/keybinding-emacs";
import "ace-builds/src-noconflict/keybinding-sublime";
import "ace-builds/src-noconflict/keybinding-vim";
import "ace-builds/src-noconflict/keybinding-vscode";



// Ace Themes
import "ace-builds/src-noconflict/theme-ambiance";
import "ace-builds/src-noconflict/theme-chaos";
import "ace-builds/src-noconflict/theme-chrome";
import "ace-builds/src-noconflict/theme-clouds";
import "ace-builds/src-noconflict/theme-clouds_midnight";
import "ace-builds/src-noconflict/theme-cobalt";
import "ace-builds/src-noconflict/theme-crimson_editor";
import "ace-builds/src-noconflict/theme-dawn";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/theme-dreamweaver";
import "ace-builds/src-noconflict/theme-eclipse";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-gob";
import "ace-builds/src-noconflict/theme-gruvbox";
import "ace-builds/src-noconflict/theme-idle_fingers";
import "ace-builds/src-noconflict/theme-iplastic";
import "ace-builds/src-noconflict/theme-katzenmilch";
import "ace-builds/src-noconflict/theme-kr_theme";
import "ace-builds/src-noconflict/theme-kuroir";
import "ace-builds/src-noconflict/theme-merbivore";
import "ace-builds/src-noconflict/theme-merbivore_soft";
import "ace-builds/src-noconflict/theme-mono_industrial";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-nord_dark";
import "ace-builds/src-noconflict/theme-pastel_on_dark";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/theme-solarized_light";
import "ace-builds/src-noconflict/theme-sqlserver";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/theme-textmate";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/theme-tomorrow_night";
import "ace-builds/src-noconflict/theme-tomorrow_night_blue";
import "ace-builds/src-noconflict/theme-tomorrow_night_bright";
import "ace-builds/src-noconflict/theme-tomorrow_night_eighties";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/theme-vibrant_ink";
import "ace-builds/src-noconflict/theme-xcode";



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



// Actual Code
export default function Editor( {
  lang, theme
}) {
  return (
    <Ace
      placeholder="Placeholder Text"
      mode={lang}
      theme={theme}
      onChange={()=> {}}
      fontSize={14}
      showPrintMargin={true}
      showGutter={true}
      highlightActiveLine={true}
      keyboardHandler="vscode"
      width="100%"
      height="100%"
      setOptions={ {
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        tabSize: 2
      }}
      editorProps={ { $blockScrolling: true }} />
  );
}




  // let languages = ["actionscript", "applescript", "assembly_x86", "batchfile", "c_cpp", "clojure", "cobol", "coffee", "csharp", "css", "dart", "django", "dockerfile", "dot", "ejs", "fortran", "fsharp", "gitignore", "golang", "graphqlschema", "groovy", "haml", "haskell", "haskell_cabal", "html", "jade", "java", "javascript", "json", "json5", "jsp", "jsx", "julia", "kotlin", "latex", "less", "livescript", "lua", "makefile", "markdown", "matlab", "mysql", "nginx", "objectivec", "pascal", "perl", "php", "plain_text", "powershell", "prisma", "python", "r", "redshift", "ruby", "rust", "sass", "scala", "scss","sql","sqlserver","stylus","svg","swift","tex","text","tsx","typescript","vbscript","xml","xquery","yaml"]