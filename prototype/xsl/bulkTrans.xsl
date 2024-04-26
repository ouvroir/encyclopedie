<?xml version="1.0" encoding="UTF-8"?>
<!-- Transformation demo for encyclopedie generation -->
<!-- it uses initial-template, transformation use the '-it' parameter with
    '{http://www.w3.org/1999/XSL/Transform}' initial-template` -->
<!-- this transformation uses EXPath file module, you should use Saxon PE or EE for transformation -->

<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema" 
    xmlns:file="http://expath.org/ns/file" 
    xmlns:xi="http://www.w3.org/2001/XInclude" 
    xmlns:xd="http://www.oxygenxml.com/ns/doc/xsl"
    xmlns:fct="factoton"
    xpath-default-namespace="http://www.tei-c.org/ns/1.0" 
    exclude-result-prefixes="#all" 
    version="3.0">

    <xsl:output method="xhtml" html-version="5.0" include-content-type="no" omit-xml-declaration="yes" exclude-result-prefixes="#all" encoding="UTF-8" indent="yes"/>
    <xsl:strip-space elements="*"/>

    <xsl:variable name="buildPath" select="doc('config.xml')/fct:config/fct:build"/>
    <xsl:variable name="folder" select="collection('../xml/acquisition?recurse=yes;select=*.xml')"/>

<!--Test generation des html sans module file ^^ [* question de chemin à voir]-->
 <xsl:template name="xsl:initial-template">
 <xsl:for-each select="$folder">
 <xsl:variable name="file" select="base-uri(.)"/>
 <xsl:variable name="filename" select="tokenize($file,'/')[last()]"/>
  <xsl:variable name="dest" select="replace($filename,'.xml', '')"/>
 <xsl:result-document href="{$buildPath}{$dest}.html"> <!--takes base dir of the present file as reference (project dir) :| -->
 <xsl:copy-of select="fct:generate($file,'teiJ2html.xsl')"/> 
 </xsl:result-document>
 </xsl:for-each> 
 </xsl:template>
    
    <xsl:function name="fct:generate" as="item()*">
        <xsl:param name="source"/>
        <xsl:param name="xsl"/>
        <xsl:variable name="result" select="transform(
            map{
            'stylesheet-location' : $xsl,
            'source-node' : doc($source)
            })"/>
        <xsl:sequence select="$result?*"/>
        <!--<xsl:sequence select="file:write($buildPath || $destination || '.html', $result?*)"/> check if it works in native xslt : doesn’t work file module not available-->
    </xsl:function>
</xsl:stylesheet>