gsx -sDEVICE=pdfwrite \
  -dPDFSETTINGS=/screen \
  -dNOPAUSE -dQUIET -dBATCH \
  -dCompatibilityLevel=1.4 \
  `# font settings` \
  -dSubsetFonts=true \
  -dCompressFonts=true \
  -dEmbedAllFonts=true \
  `# color format` \
  -sProcessColorModel=DeviceRGB \
  -sColorConversionStrategy=RGB \
  -sColorConversionStrategyForImages=RGB \
  -dConvertCMYKImagesToRGB=true \
  `# image resample` \
  -dDownsampleColorImages=true \
  -dDownsampleGrayImages=true \
  -dDownsampleMonoImages=true \
  -dColorImageResolution=150 \
  -dGrayImageResolution=150 \
  -dMonoImageResolution=150 \
  `# detect any images embedded multiple times` \
  -dDetectDuplicateImages=true \
  -sOutputFile=$2 $1