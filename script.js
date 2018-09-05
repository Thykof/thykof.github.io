var worker;

function Highlight(tagname) {
  // Set highlight-tag class to all tags with tagName
  Tags = document.getElementsByClassName(tagname);
  var j;
  for (j = 0; j < Tags.length; j++) {
    Tags[j].classList.add('highlight-tag');
  }

  if(typeof(Worker) !== "undefined") {
    if(typeof(worker) == "undefined") {
      worker = new Worker("webWorker.js");
    }
    worker.postMessage('django-tag');
    document.getElementById('projects').scrollIntoView();
    worker.onmessage = resetHighlight;
  }
}

function resetHighlight() {
  // reset all tags
  tags = document.getElementsByClassName('project-tag');
  console.log(tags);
  var i;
  for (i = 0; i < tags.length; i++) {
    console.log(tags[i].innerHTML);
    tags[i].classList.remove('highlight-tag');
  }
}
