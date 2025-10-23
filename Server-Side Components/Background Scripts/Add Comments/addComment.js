function addCommentToRecord(tableName, recSysId, commentText) {
  var rec = new GlideRecord(tableName);
  if (rec.get(recSysId)) {
    // Get the current user's name automatically
    var userName = gs.getSession().getUserName(); 

    // Set the journal entry with the comment and the current user's name
    rec.comments.setJournalEntry(commentText, userName);

    rec.update();
  }
}

addCommentToRecord('incident', '568f683a48e77110c3639434e3215886', 'This is my comment.');
