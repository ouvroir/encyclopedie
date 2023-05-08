<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    version="3.0" expand-text="true">
    <xsl:template name="head">
        <xsl:param name="title"/>
        <head>
            <meta charset="UTF-8" />
            <title>{$title}</title>
            <meta name="description" content="Description de la page" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="format-detection" content="telephone=no" />
            
            <link rel="stylesheet" href="css/style.css" />
            
            <!-- Google analytics ou autres outils d'analytics -->
            
            <!-- Favicon & mobiles icons (http://realfavicongenerator.net/) -->
        </head>
    </xsl:template>
</xsl:stylesheet>