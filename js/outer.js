function createParagraph(anchorID){
    $('<p>').text('Paragraph append to ' + anchorID).appendTo('#'+ anchorID);
}