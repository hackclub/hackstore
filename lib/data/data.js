import gimpdata from "./gimp/index";
import inkscapedata from "./inkspace/index";
import audacitydata from "./audacity/index";
import wolfensteindata from "./wolfenstein/index";
import blenderdata from "./blender/index";
import calibredata from "./calibrereader/index";
import jquerydata from "./jquery/index";
import reactdata from "./react/index";
import vuedata from "./vue/index";
import paperdata from "./paper/index";
import angulardata from "./angular/index";
import d3data from "./d3/index";
import phaserdata from "./phaser/index";
import vscodedata from "./vscode/index";
import nodejsdata from "./nodejs/index";
import pythondata from "./python/index";
import cplusplusdata from "./c++/index";
import javadata from "./java/index";
import jscrashcoursedata from "./js_crashcourse/index";
import pythoncoursedata from "./pythoncourse/index";
import hackidedata from "./hackide/index";
import reactpdfdata from "./reactpdf/index";
import htmlpdfdata from "./htmlpdf/index";
import javascriptpdfdata from "./javascriptpdf/index";
import androidpdfdata from "./androidpdf/index";
import csspdfdata from "./csspdf/index";
import pythonpdfdata from "./pythonpdf/index";
import javapdfdata from "./javapdf/index";
import iospdfdata from "./iospdf/index";
import nodejspdfdata from "./nodepdf/index";
import vuepdfdata from "./vuepdf/index";
import bootstrappdfdata from "./bootstrappdf/index";
import jquerypdfdata from "./jquerypdf/index";
import rubyrailspdfdata from "./rubyrailspdf/index";
import davincidata from "./davinci/index";
import cpluspluspdfdata from "./cpluspluspdf/index";
import gitcoursedata from "./gitcourse/index";
import htmlcoursedata from "./htmlcourse/index";
import androidcoursedata from "./androidcourse/index";
import reactcoursedata from "./reactcourse/index";
import vuecoursedata from "./vuecourse/index";
import csscoursedata from "./csscourse/index";
import unitydata from "./unity/index";
import sqlcoursedata from "./sqlcourse/index";
import dscoursedata from "./dscourse/index";
import unityfpsdata from "./unityfpscourse/index";
import pencil2ddata from "./pencil2d/index";
import elonmuskdata from "./elonmusk/index";
import dylandata from "./dylan/index";
import patrickdata from "./patrick/index";
import guillermodata from "./guillermo/index";
import limordata from "./limor/index";
import simonedata from "./simone/index";
import audreydata from "./audrey/index";
import jackdata from "./jack/index";
import chrisdata from "./chris/index";
import ubuntudata from "./ubuntu/index";
import fedoradata from "./fedora/index";
import linuxmintdata from "./linuxmint/index";
import kalidata from "./kali/index";
import archdata from "./arch/index";
import anacondadata from "./anaconda/index";
import pentestingcoursedata from "./pentestingcourse/index";
import firebaseappcoursedata from "./firebaseappcourse";
import datasciencecoursedata from "./datasciencecourse";
import deeplearningcoursedata from "./deeplearningcourse";
import jsprojectsdata from "./jsprojects";
import denocoursedata from "./denocourse";
import golangcoursedata from "./golangcoursedata";
import bootstrapdata from "./bootstrap";
import popperdata from "./popper";

const map = new Map();

const Set = (name, data) => {
  map.set(name, data);
};

Set("gimp", gimpdata);

Set("inkscape", inkscapedata);

Set("audacity", audacitydata);

Set("wolfenstein", wolfensteindata);

Set("blender", blenderdata);

Set("calibre", calibredata);

Set("jquery", jquerydata);

Set("react", reactdata);

Set("vue", vuedata);

Set("paper", paperdata);

Set("angular", angulardata);

Set("d3", d3data);

Set("vscode", vscodedata);

Set("nodejs", nodejsdata);

Set("python", pythondata);

Set("cplusplus", cplusplusdata);

Set("java", javadata);

Set("jscrashcourse", jscrashcoursedata);

Set("pythoncourse", pythoncoursedata);

Set("hackide", hackidedata);

Set("reactpdf", reactpdfdata);

Set("htmlpdf", htmlpdfdata);

Set("javascriptpdf", javascriptpdfdata);

Set("androidpdf", androidpdfdata);

Set("csspdfdata", csspdfdata);

Set("cpluspluspdf", cpluspluspdfdata);

Set("pythonpdf", pythonpdfdata);

Set("javapdf", javapdfdata);

Set("iospdf", iospdfdata);

Set("nodejspdf", nodejspdfdata);

Set("vuepdf", vuepdfdata);

Set("bootstrappdf", bootstrappdfdata);

Set("jquerypdf", jquerypdfdata);

Set("rubyrailspdf", rubyrailspdfdata);

Set("davinci", davincidata);

Set("phaser", phaserdata);

Set("gitcourse", gitcoursedata);

Set("htmlcourse", htmlcoursedata);

Set("androidcourse", androidcoursedata);

Set("reactcourse", reactcoursedata);

Set("vuecourse", vuecoursedata);

Set("csscourse", csscoursedata);

Set("unity", unitydata);

Set("sqlcourse", sqlcoursedata);

Set("dscourse", dscoursedata);

Set("unityfpscourse", unityfpsdata);

Set("pencil2d", pencil2ddata);

Set("elonama", elonmuskdata);

Set("dylanama", dylandata);

Set("patrickama", patrickdata);

Set("guillermoama", guillermodata);

Set("limorama", limordata);

Set("simoneama", simonedata);

Set("audreyama", audreydata);

Set("jackama", jackdata);

Set("chrisama", chrisdata);

Set("ubuntu", ubuntudata);

Set("fedora", fedoradata);

Set("linuxmint", linuxmintdata);

Set("kali", kalidata);

Set("arch", archdata);

Set("anaconda", anacondadata);

Set("pentestingcourse", pentestingcoursedata);

Set("firebaseappcourse", firebaseappcoursedata);

Set("datasciencecourse", datasciencecoursedata);

Set("deeplearningcourse", deeplearningcoursedata);

Set("jsprojects", jsprojectsdata);

Set("denocourse", denocoursedata);

Set("golangcourse", golangcoursedata);

Set("bootstrap", bootstrapdata);

Set("popperjs", popperdata);

export default map;
