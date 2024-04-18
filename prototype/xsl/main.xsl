<?xml version="1.0" encoding="UTF-8"?>
<!-- Transformation demo for encyclopedie generation -->
<!-- it uses initial-template, transformation use the `-it` parameter with
    `{http://www.w3.org/1999/XSL/Transform}initial-template` -->
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
    
    <xsl:variable name="contentPath" select="doc(file:base-dir() || 'config.xml')/fct:config/fct:content"/>
    <xsl:variable name="buildPath" select="doc(file:base-dir() || 'config.xml')/fct:config/fct:build"/>

    <xsl:template name="xsl:initial-template">
        <xsl:value-of select="fct:generate($contentPath || 'acquisition/article01.xml',
            file:base-dir() || 'tei2html.xsl', 'test')"/>
    </xsl:template>
    
    <xsl:function name="fct:generate" as="item()*">
        <xsl:param name="source"/>
        <xsl:param name="xsl"/>
        <xsl:param name="destination"/>
        <xsl:variable name="result" select="transform(
            map{
            'stylesheet-location' : $xsl,
            'source-node' : doc($source)
            })"/>
        <xsl:sequence select="file:write(file:base-dir() || $buildPath || $destination || '.html', $result?*)"/>
    </xsl:function>


</xsl:stylesheet>