let imgBox = document.querySelectorAll('.imgBox'),
  contentBx = document.querySelectorAll('.contentBx');

for (let i = 0; i < imgBox.length; i++) {
  imgBox[i].addEventListener('mouseover', function () {
    for (let i = 0; i < contentBx.length; i++) {
      contentBx[i].className = 'contentBx';
    }
    document.getElementById(this.dataset.id).className = 'contentBx active';

    for (let i = 0; i < imgBx.length; i++) {
      imgBox[i].className = 'imgBox';
    }
    this.className = 'imgBox active';
  });
}
