<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema" 
    xmlns:xi="http://www.w3.org/2001/XInclude" 
    xmlns:xd="http://www.oxygenxml.com/ns/doc/xsl"
    xmlns:fct="factoton"
    xpath-default-namespace="http://www.tei-c.org/ns/1.0" 
    exclude-result-prefixes="#all" 
    version="3.0">
    <xsl:output method="xhtml" html-version="5.0" include-content-type="no" omit-xml-declaration="yes" exclude-result-prefixes="#all" encoding="UTF-8" indent="yes"/>
    <xsl:strip-space elements="*"/>
    
    <xsl:import href="components/layout.xsl"/>
    <xsl:import href="components/head.xsl"/>
    <xsl:import href="components/header.xsl"/>
    
    <xd:doc>
        <xd:desc>jTEI2HTML5</xd:desc>
    </xd:doc>
    
    <xd:doc scope="stylesheet">
        <xd:desc>
            <xd:p><xd:b>Created on:</xd:b> 17 septembre 2022</xd:p>
            <xd:p><xd:b>Author:</xd:b> emchateau</xd:p>
            <xd:p>a jTEI transformation. https://tei-c.org/release/doc/tei-p5-exemplars/html/tei_jtei.doc.html</xd:p>
        </xd:desc>
    </xd:doc>
    
    <xsl:output method="xhtml" html-version="5.0" include-content-type="no" omit-xml-declaration="yes" exclude-result-prefixes="#all" encoding="UTF-8" indent="yes" />
    <xsl:strip-space elements="*" />
    
    <xsl:mode on-no-match="shallow-copy"/>
    <xsl:template match="processing-instruction() | comment()"/>
    
    <xsl:variable name="cssPath" select="'css/normalize.css', 'css/main.css'" />
    <xsl:variable name="jsPath" select="'js/script.js'" />
    
    <xsl:variable name="title" select="'Test de titre'"/>
    
    <xsl:template match="/TEI">
        <!--<html lang="fr">
            <xsl:apply-templates select="teiHeader" />
            <body>
                <xsl:apply-templates select="text" />
            </body>
        </html>-->
        <xsl:call-template name="layout">
            <xsl:with-param name="title" select="$title"/>
        </xsl:call-template>
    </xsl:template>
    
    <xsl:template match="teiHeader">
        <head>
            <meta charset="utf-8" />
            <meta http-equiv="content-type" content="text/html" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
            <title>
                <xsl:for-each select="fileDesc/titleStmt/title">
                    <xsl:apply-templates />
                    <xsl:if test="position() != last()">
                        <xsl:text>, </xsl:text>
                    </xsl:if>
                </xsl:for-each>
            </title>
            <xsl:for-each select="$cssPath">
                <link href="{.}" rel="stylesheet" />
            </xsl:for-each>
            <xsl:for-each select="$jsPath">
                <script src="{.}" />
            </xsl:for-each>
        </head>
    </xsl:template>
    
    <xsl:template match="text">
        <main>
            <xsl:apply-templates />
        </main>
    </xsl:template>
    
    <xsl:template match="front | body | back">
        <section class="{local-name(.)}">
            <xsl:apply-templates />
        </section>
    </xsl:template>
    
    <xsl:template match="front/div | body/div | back/div">
        <article>
            <xsl:apply-templates />
        </article>
    </xsl:template>
    <xsl:template match="div">
        <div>
            <xsl:apply-templates />
        </div>
    </xsl:template>
    <xsl:template match="epigraph">
        <div class="epigraph">
            <xsl:apply-templates/>
        </div>
    </xsl:template>
    <xsl:template match="p">
        <p>
            <xsl:apply-templates />
        </p>
    </xsl:template>
    <xsl:template match="list">
        <xsl:choose>
            <xsl:when test="@type = 'ordered'">
                <ol>
                    <xsl:apply-templates />
                </ol>
            </xsl:when>
            <xsl:when test="@type = 'definition'">
                <dl>
                    <xsl:apply-templates mode="definition" />
                </dl>
            </xsl:when>
            <xsl:otherwise>
                <ul>
                    <xsl:apply-templates />
                </ul>
            </xsl:otherwise>
        </xsl:choose>
    </xsl:template>
    <xsl:template match="item">
        <li>
            <xsl:apply-templates />
        </li>
    </xsl:template>
    <xsl:template match="item" mode="definition">
        <dt>
            <xsl:apply-templates />
        </dt>
    </xsl:template>
    <xsl:template match="head">
        <xsl:variable name="level" select="count(ancestor::section | ancestor::div | ancestor::article)" />
        <xsl:variable name="name" select="concat('h', $level)" />
        <xsl:element name="{$name}">
            <xsl:apply-templates select="@* | node()" />
        </xsl:element>
    </xsl:template>
    
    <xsl:template match="note">
        <div class="notes" id="{@xml:id}">
            <a href="{concat('#bn', @xml:id)}">
                <xsl:number count="note" level="any" />
                <xsl:text>. </xsl:text>
            </a>
            <xsl:apply-templates/>
        </div>
    </xsl:template>
    
    <xsl:template match="ref">
        <a class="noteCall" href="{@target}" id="{concat('bn', substring-after(@target, '#'))}">
            <xsl:number count="ref" level="any" />
        </a>
    </xsl:template>
    
    <xsl:template match="ref[@type='link']">
        <!-- @todo check the doc -->
        <a class="noteCall" href="{@target}" id="{concat('bn', substring-after(@target, '#'))}">
            <xsl:number count="ref" level="any" />
        </a>
    </xsl:template>
    
    <xsl:template match="bibl">
        <div class="bibl">
            <xsl:apply-templates/>
        </div>
    </xsl:template>
    
    <xsl:template match="cit">
        <!-- @todo -->
        <xsl:apply-templates/>
    </xsl:template>
    
    <xsl:template match="figure">
        <!-- @todo -->
    </xsl:template>
    <xsl:template match="graphic">
        <!-- @todo -->
    </xsl:template>
    
    <xsl:template match="table">
        <!-- @todo -->
    </xsl:template>
    
    <xsl:template match="lb">
        <!-- @todo insert in schema -->
        <br />
    </xsl:template>
    
    <xsl:template match="ptr">
        <!-- @todo revoir -->
        <a class="ptr" href="{@target}"><xsl:apply-templates/></a>
    </xsl:template>
    
    <!-- inline -->
    <xsl:template match="abbr">
        <abbr><xsl:apply-templates/></abbr>
    </xsl:template>
    <xsl:template match="att | gi | val | ident">
        <pre class="{local-name(.)}"><xsl:apply-templates/></pre>
    </xsl:template>
    <xsl:template match="code">
        <pre><xsl:apply-templates/></pre>
    </xsl:template>
    <xsl:template match="eg">
        <code class="xml"><xsl:apply-templates/></code>
    </xsl:template>
    <xsl:template match="egXML">
        <code><xsl:apply-templates/></code>
    </xsl:template>
    <xsl:template match="emph">
        <em class="emph">
            <xsl:apply-templates />
        </em>
    </xsl:template>
    <xsl:template match="foreign">
        <mark class="lang"><xsl:apply-templates/></mark>
    </xsl:template>
    <xsl:template match="gap">
        <gap>[...]</gap>
    </xsl:template>
    <xsl:template match="mentioned">
        <em class="mentioned"><xsl:apply-templates/></em>
    </xsl:template>
    <xsl:template match="q">
        <xsl:text>« </xsl:text>
        <xsl:apply-templates/>
        <xsl:text> »</xsl:text>
    </xsl:template>
    <xsl:template match="p/quote">
        <xsl:text>« </xsl:text>
        <xsl:apply-templates/>
        <xsl:text> »</xsl:text>
    </xsl:template>
    
    <!-- cit et ref -->
    <xsl:template match="quote">
        <blockquote>
            <xsl:apply-templates />
        </blockquote>
    </xsl:template>
    <!--<xsl:template match="ref">
    <a href="{@target}">
      <xsl:apply-templates/>
    </a>
  </xsl:template>-->
    <xsl:template match="soCalled">
        <em class="soCalled">
            <xsl:apply-templates />
        </em>
    </xsl:template>
    <xsl:template match="supplied">
        <xsl:text>[</xsl:text>
        <xsl:apply-templates />
        <xsl:text>]</xsl:text>
    </xsl:template>
    <xsl:template match="tag">
        <pre>
      <xsl:text>&lt;</xsl:text>
        <xsl:apply-templates></xsl:apply-templates>
      <xsl:text>&gt;</xsl:text>
    </pre>
    </xsl:template>
    <xsl:template match="term">
        <strong class="term"><xsl:apply-templates/></strong>
    </xsl:template>
    <xsl:template match="title">
        <xsl:choose>
            <xsl:when test="@level='a'">
                <xsl:text>« </xsl:text>
                <xsl:apply-templates/>
                <xsl:text> »</xsl:text>
            </xsl:when>
            <xsl:when test="@level='j'">
                <cite><xsl:apply-templates/></cite>
            </xsl:when>
            <xsl:otherwise><em class="title"><xsl:apply-templates/></em></xsl:otherwise>
        </xsl:choose>
    </xsl:template>
    
    
    <!-- legacy -->
    <xsl:template match="hi[@rend = 'italic']">
        <em>
            <xsl:apply-templates />
        </em>
    </xsl:template>
    <xsl:template match="hi[@rend = 'bold']">
        <strong>
            <xsl:apply-templates />
        </strong>
    </xsl:template>
    <xsl:template match="hi[@rend = 'superscript']">
        <!-- @todo insert in schema -->
        <sup>
            <xsl:apply-templates />
        </sup>
    </xsl:template>
    <xsl:template match="hi[@rend = 'underscript']">
        <!-- @todo insert in schema -->
        <sub>
            <xsl:apply-templates />
        </sub>
    </xsl:template>
    <xsl:template match="hi[@rend = 'smallcaps']">
        <!-- @todo insert in schema -->
        <span class="smallcaps">
            <xsl:apply-templates />
        </span>
    </xsl:template>
    <xsl:template match="del">
        <!-- @todo insert in schema -->
        <del>
            <xsl:apply-templates />
        </del>
    </xsl:template>
    <xsl:template match="label">
        <span class="label"><xsl:apply-templates/></span>
    </xsl:template>
    
    <xsl:template match="persName | placeName | orgName | date | docAuthor">
        <!-- @todo insert in schema -->
        <span class="{local-name()}">
            <xsl:apply-templates />
        </span>
    </xsl:template>
    
    <!-- attributes -->
    <!--<xsl:template match="*">
    <xsl:element name="{local-name()}">
      <xsl:apply-templates select="@*" />
      <xsl:apply-templates select="node()" />
    </xsl:element>
  </xsl:template>-->
    <xsl:template match="@xml:id">
        <xsl:attribute name="id">
            <xsl:value-of select="." />
        </xsl:attribute>
    </xsl:template>
    <!--
  <xsl:template match="@*">
    <xsl:copy />
  </xsl:template>-->
    
    
</xsl:stylesheet>