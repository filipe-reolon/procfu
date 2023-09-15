const pfForm = document.querySelector('.pf-form[data-type="comment"]');
console.log(pfForm)
console.log(pfForm)
const pfCommentRow = pfForm.querySelector('.pfCommentRow');
const pfCommentAttach = pfForm.querySelector('.pfCommentAttach');
const pfButtonRow = pfForm.querySelector('.pfButtonRow');
pfButtonRow.style.marginBottom = '10px'
console.log(pfCommentRow)
pfForm.removeChild(pfCommentRow);
pfForm.removeChild(pfCommentAttach);
pfForm.removeChild(pfButtonRow);

pfForm.insertBefore(pfCommentRow, pfForm.firstChild);
pfForm.insertBefore(pfCommentAttach, pfCommentRow.nextSibling);
pfForm.insertBefore(pfButtonRow, pfCommentAttach.nextSibling);