"use strict";(self.webpackChunkaesop_manual=self.webpackChunkaesop_manual||[]).push([[5007],{8149:(e,n,t)=>{t.r(n),t.d(n,{Form:()=>p,assets:()=>m,contentTitle:()=>h,default:()=>y,frontMatter:()=>u,metadata:()=>d,toc:()=>f});var o=t(5893),a=t(1151),l=t(7294),i=t(7460),r=t.n(i),s=t(6825),c=t(3162);const u={},h="Converting your data for Kumu",d={id:"mapping/conversion",title:"Converting your data for Kumu",description:"Once you're ready to visualize your analysis as a system dynamics map, you'll need to export your data from Airtable and upload it to Kumu. To keep things simple, we'll download our data from Airtable as CSV files, do some minor formatting, and then upload it to Kumu as an XLSX file.",source:"@site/docs/mapping/02-conversion.mdx",sourceDirName:"mapping",slug:"/mapping/conversion",permalink:"/aesop-manual/mapping/conversion",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction to Kumu",permalink:"/aesop-manual/mapping/intro"},next:{title:"Introduction",permalink:"/aesop-manual/exploring/intro"}},m={},f=[];function p(){const e={button:"button",div:"div",form:"form",input:"input",label:"label",li:"li",ul:"ul",...(0,a.a)()},n=(0,l.useRef)(null),t=(0,l.useRef)(null),i=(0,l.useRef)(null),u=(0,l.useRef)(null),h=(0,l.useRef)({}),d=(0,l.useRef)({});return(0,o.jsx)(e.div,{children:(0,o.jsx)(e.form,{onSubmit:async function(e){if(e.preventDefault(),r().parse(n.current.files[0],{complete:e=>{h.current=e},header:!0,skipEmptyLines:"greedy"}),r().parse(t.current.files[0],{complete:e=>{d.current=e},header:!0,skipEmptyLines:"greedy"}),h.current?.meta&&d.current?.meta){const e=i.current.value?JSON.parse(i.current.value):{label:h.current.meta.fields[0]},n=u.current.value?JSON.parse(u.current.value):{from:d.current.meta.fields[0],to:d.meta.fields[1],label:d.meta.fields[2]},t=[{column:"label",type:String,width:20,value:n=>n[e.label]},...h.current.meta.fields.filter((e=>"label"!=e)).map((e=>({column:e,type:String,value:n=>n[e]})))],o=[{column:"from",type:String,width:20,value:e=>e[n.from]},{column:"to",type:String,width:20,value:e=>e[n.to]},{column:"label",type:String,width:20,value:e=>e[n.label]},...d.current.meta.fields.filter((e=>!["from","to","label"].includes(e))).map((e=>({column:e,type:String,value:n=>n[e]})))],a=d.current.data.filter((e=>e[n.from]&&e[n.to]&&e[n.label])),l=h.current.data.filter((n=>n[e.label])),r=await(0,s.Z)([a,l],{schema:[o,t],sheets:["Connections","Variables"]});(0,c.saveAs)(r,"convertedForKumu.xlsx")}},children:(0,o.jsxs)(e.ul,{style:{display:"flex",flexDirection:"column",listStyleType:"none"},children:[(0,o.jsx)(e.li,{children:"Variable file"}),(0,o.jsx)(e.li,{children:(0,o.jsx)(e.label,{children:(0,o.jsx)(e.input,{type:"file",ref:n,required:!0})})}),(0,o.jsx)(e.li,{children:(0,o.jsxs)(e.label,{children:["optional column configuration for variables",(0,o.jsx)(e.input,{type:"text",ref:i,defaultValue:'{"label":"label"}'})]})}),(0,o.jsx)(e.li,{children:"Connections file"}),(0,o.jsx)(e.li,{children:(0,o.jsx)(e.label,{children:(0,o.jsx)(e.input,{type:"file",ref:t,required:!0})})}),(0,o.jsx)(e.li,{children:(0,o.jsxs)(e.label,{children:["optional column configuration for connections",(0,o.jsx)(e.input,{type:"text",ref:u,defaultValue:'{"label":"label","from":"from","to":"to"}'})]})}),(0,o.jsx)(e.li,{children:(0,o.jsx)(e.button,{children:"Convert"})})]})})})}function g(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"converting-your-data-for-kumu",children:"Converting your data for Kumu"}),"\n",(0,o.jsx)(n.p,{children:"Once you're ready to visualize your analysis as a system dynamics map, you'll need to export your data from Airtable and upload it to Kumu. To keep things simple, we'll download our data from Airtable as CSV files, do some minor formatting, and then upload it to Kumu as an XLSX file."}),"\n",(0,o.jsx)(n.p,{children:"First, visit your Observations and Variables tables, and go to [View name]-> Download CSV."}),"\n",(0,o.jsx)(n.p,{children:"!IMPORTANT!\nMake sure not to include any fields containing full transcripts in your Airtable exports\u2014these might exceed Excel's per-cell character limit and create an unreadable file. You can filter for just the fields you want to include in your Kumu map by hiding them in your view (it may also be a good idea to create a specific view just for Kumu exports.)"}),"\n",(0,o.jsx)(n.p,{children:'Next, use the converter tool below to compile your CSVs into an XLSX that Kumu will accept. You\'ll have to click "Convert" twice to get a file---this is a bug that will be fixed eventually.'}),"\n",(0,o.jsxs)(n.p,{children:["Kumu needs to know what to call your variables. The converter will use the first column in your uploaded file unless you tell it otherwise. You can specify a different column for you labels with the format: ",(0,o.jsx)(n.code,{children:'{"label":"your-column"}'})," (include the quotes)."]}),"\n",(0,o.jsxs)(n.p,{children:["Kumu requires a minimum of three things to draw a connection: the name of the upstream variable A to draw the connection FROM (cause, source); the name of the downstream variable B to draw the connection TO (effect, destination); and LABEL, which describes the direction of the connection (+/SAME or -/OPPOSITE). The converter will assume your first column is FROM, your second column is TO, and your third column is LABEL unless you specify otherwise, e.g. ",(0,o.jsx)(n.code,{children:'{"from":"from-column","to":"to-column","label","label-column"}'})]}),"\n",(0,o.jsx)(p,{}),"\n",(0,o.jsx)(n.h1,{id:"uploading-to-kumu",children:"Uploading to Kumu"}),"\n",(0,o.jsx)(n.p,{children:'Follow the Kumu user guide to set up an account and create a project. Choose "System" for the map\'s preset template when prompted.'}),"\n",(0,o.jsx)(n.p,{children:'Click the green plus sign at the bottom of your new blank map and select "import," then select the XLSX file you just made under "Import XLSX or CSV file." Click the blue "import spreadsheet" button to proceed.'}),"\n",(0,o.jsx)(n.p,{children:'Next, you\'ll see an "import review" screen. If you followed the steps above correctly, Kumu should tell you that it didn\'t find any errors, and you\'ll be able to click the "save import" button in the bottom right corner to see your analysis on the map.'}),"\n",(0,o.jsx)(n.p,{children:'If Kumu finds errors, you\'ll have to scroll down through the import preview table to find the rows highlighted in red. Click "cancel", and fix the issues by re-exporting your data from Airtable.'}),"\n",(0,o.jsx)(n.h1,{id:"map-preparation",children:"Map preparation"}),"\n",(0,o.jsx)(n.p,{children:'Now you should see all of your variables and connections visualized as a mass of linked grey circles. This is very difficult to make sense of visually, so the first thing we\'re going to want to do is tell Kumu to calculate some network properties. Kumu includes automated tools for mathematically determining the "center" of the system, as well as identifying clusters of variables that seem particularly interconnected (which might represent themes in your data).'}),"\n",(0,o.jsx)(n.p,{children:'To calculate centrality metrics for your system, click on the tiny icon that looks like a laboratory beaker in the bottom right menu (second from the left), and choose "Social Network Analysis". Click on "Choose a metric" and select "All metrics" from the dropdown, then click "Run all metrics." This might take a little while if you have a particularly large or densely-connected dataset. Don\'t worry\u2014--the progress bar will eventually get to 100% and turn green. Once it does, you can click "Back" in the top left to return to the full map.'}),"\n",(0,o.jsx)(n.p,{children:'Next, we\'ll ask Kumu to automatically detect clusters of closely connected variables. Click on the "Metrics" beaker again and choose "Community Detection." Kumu will most likely tell you it found a huge number of communities, and show you the 10 largest ones. This is not particularly helpful for reducing the complexity of our map\u2014--we\'ll have to tweak the detection settings to limit the number of communities Kumu identifies. Click on the tiny gear icon in the top right (to the left of "Run"), and change "Minimum community size" to at least four or five. You can also set "Community limit" to a higher number if you want to look at more than just the top 10. Click "Update settings," then "Run" to re-run the analysis. Keep in mind that community detection is a stochastic process. Since Kumu is starting from a random guess and iteratively optimizing its groupings, it is likely that the communities detected will change slightly each time you run the analysis. If you find that your groups are changing a lot, it may be helpful to increase the "Iterations (T)" parameter to allow Kumu to run the optimization for longer. Once you have a set of communities that seem to make sense, click through them and try to assign names that reflect any themes you notice in the included variables. Don\'t forget to click "Save" to avoid losing your changes!'}),"\n",(0,o.jsx)(n.p,{children:'At this point, the map should remain unchanged visually, but if you select a variable (a circle) and then bring up the left-side sidebar by clicking the three dots on the left edge of the screen, you\'ll see a few new fields at the bottom, in addition to the ones in the data you imported. These are the metrics we just told Kumu to calculate. Clicking the "Table" icon in the bottom right will bring up a spreadsheet-style view of your imported data. You can look at your metrics and communities in this view by clicking on the filter icon in the top right and enabling them in the list that appears.'}),"\n",(0,o.jsx)(n.p,{children:'Now we can use these additional layers of analysis to make sense of our map, by telling Kumu to map the new quantitative metrics to the appearance of our variables. Click the "Settings" icon along the right edge of the screen, select everything that appears in the editable text field, and replace it with the following (don\'t forget to hit "Save!"):'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'@view "Connectivity" {\n    default: true;\n\n  /* elements: Degree: sensitivity and immediate impact */\n  element {\n    scale: scale("degree", 1, 6);\n    opacity: scale("degree", 0.9, 1.0);\n    color: scale("degree", #ffe794, #a40126)\n  }\n}\n\n@view "Efficiency" {\n  /* elements: Reach efficiency: "bang for the buck" */\n  element {\n    scale: scale("reach-efficiency", 1, 6);\n    opacity: scale("reach-efficiency", 0.9, 1.0);\n    color: scale("reach-efficiency", #ffe794, #a40126)}\n}\n\n@view "Influence" {\n  /* elements: Eigenvector: overall leverage */\n  element {\n    scale: scale("eigenvector", 1, 6);\n    opacity: scale("eigenvector", 0.9, 1.0);\n    color: scale("eigenvector", #ffe794, #a40126)\n  }\n}\n\n@view "Indegree" {\n  element {\n    scale: scale("indegree", 1, 6);\n    opacity: scale("indegree", 0.9, 1.0);\n    color: scale("indegree", #ffe794, #a40126)\n  }\n}\n\n@view "Outdegree" {\n  element {\n    scale: scale("outdegree", 1, 6);\n    opacity: scale("outdegree", 0.9, 1.0);\n    color: scale("outdegree", #ffe794, #a40126)\n  }\n}\n\n@view "Pagerank" {\n  element {\n    scale: scale("glPagerank", 1, 6);\n    opacity: scale("glPagerank", 0.9, 1.0);\n    color: scale("glPagerank", #ffe794, #a40126)\n  }\n}\n\n@view "Reverse pagerank" {\n  element {\n    scale: scale("glPagerankReversed", 1, 6);\n    opacity: scale("glPagerankReversed", 0.9, 1.0);\n    color: scale("glPagerankReversed", #ffe794, #a40126)\n  }\n}\n\n@controls {\n  top {\n    label {\n      value: "emphasis";\n      font-size: 12;\n      font-style: italic;\n      font-weight: 500;\n    }\n\n    view-toggle {\n      default: "Influence";\n      multiple: false;\n      as: labels;\n      font-size: 12;\n      font-weight: 700;\n      text-transform: uppercase;\n    }\n\n    label {\n      value: "top";\n      font-size: 12;\n      font-style: italic;\n      font-weight: 500;\n    }\n\n    showcase {\n      multiple: true;\n      mode: normal;\n      as: labels;\n      placeholder: "all elements";\n      font-size: 12;\n      font-weight: 700;\n      text-transform: uppercase;\n\n      option {\n        label: "connectivity";\n        selector: element["degree">10];\n      }\n\n      option {\n        label: "efficiency";\n        selector: element["reach-efficiency">0.01];\n      }\n\n      option {\n        label: "influence";\n        selector: element["eigenvector">0.02];\n      }\n\n      option {\n        label: "pagerank";\n        selector: element["glPagerank">0.01];\n      }\n\n      option {\n        label: "reverse pagerank";\n        selector: element["glPagerankReversed">0.01];\n      }\n\n      option {\n        label: "frequency";\n        selector: connection["frequency">3];\n      }\n    }\n\n    label {\n      value: "role";\n      font-size: 12;\n      font-style: italic;\n      font-weight: 500;\n    }\n\n    showcase {\n      multiple: true;\n      as: labels;\n      placeholder: "all elements";\n      font-size: 12;\n      font-weight: 700;\n      text-transform: uppercase;\n\n      option {\n        label: "high in";\n        selector: ["indegree">3];\n      }\n\n      option {\n        label: "high out";\n        selector: ["outdegree">3];\n      }\n    }\n  }\n\n  bottom {\n    label {\n      value: "top";\n      font-size: 12;\n      font-style: italic;\n      font-weight: 500;\n    }\n\n    showcase {\n      mode: loose;\n      multiple: match-all;\n\n      option {\n        label: "regular";\n        selector: ["reach-efficiency">0.01], ["eigenvector">0.02];\n      }\n\n      option {\n        label: "pagerank";\n        selector: ["glPagerank">0.01], ["glPagerankReversed">0.01];\n      }\n\n      option {\n        label: "frequency";\n        selector: ["frequency">3];\n      }\n\n      option {\n        label: "2+degree";\n        selector: ["degree">1];\n      }\n    }\n\n    label {\n      value: "cluster";\n      font-size: 12;\n      font-style: italic;\n      font-weight: 500;\n    }\n\n    showcase {\n      target: element;\n      by: "community";\n      as: labels;\n      multiple: true;\n      default: select-none;\n      mode: normal;\n      font-size: 12;\n      font-weight: 700;\n      text-transform: uppercase;\n    }\n  }\n}\n\n@settings {\n  ignore-orphans: true;\n  layout: force;\n  theme: light;\n  element-size: 40;\n  text-overflow: auto;\n  culling: false;\n  background-opacity: 0;\n  layout-preset: hairball;\n  element-text-align: center;\n}\n\nconnection["frequency"] {\n  scale: scale("frequency", 1, 10);\n}\n\nconnection["label"="-"] {\n  style: dashed;\n}\n\n'})}),"\n",(0,o.jsx)(n.p,{children:"You may have to refresh the page to see the changes, but your map should now be much more spread out, and there should now be several rows of clickable links at the top and bottom of the screen. These are controls that tell Kumu to change the size and color of variables according to their scores on the metrics we calculated (top row, the Kumu docs go into greater detail re: what each metric represents); filter for just the variables that score the highest on each metric (second row from top, you can choose more than one); and filter for just the variables that appear in the identified clusters/communities (bottomw row). Play around with different combinations of these visualization controls, and see what patterns emerge!"})]})}function y(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(g,{...e})}):g(e)}}}]);