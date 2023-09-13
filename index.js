const { exec } = require('child_process');
const fs = require('fs').promises;

const compressPDF = (inputPDFPath, outputPDFPath) => {
  return new Promise((resolve, reject) => {
    const gsCommand = `gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/ebook -dNOPAUSE -dQUIET -dBATCH -sOutputFile=${outputPDFPath} ${inputPDFPath}`;

    exec(gsCommand, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing Ghostscript: ${error}`);
        return reject(error);
      }
      console.log(`Ghostscript output: ${stdout}`);
      resolve();
    });
  });
};

// Example usage
(async () => {
  const inputPDFPath = './storage/input.pdf';  // Replace with your input PDF path
  const outputPDFPath = './storage/compressed.pdf';  // Replace with your output PDF path

  try {
    await compressPDF(inputPDFPath, outputPDFPath);
    console.log(`Compressed PDF saved to ${outputPDFPath}`);
  } catch (error) {
    console.error(`Failed to compress PDF: ${error}`);
  }
})();
