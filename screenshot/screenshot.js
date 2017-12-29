// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var socket=io("http://192.168.42.131:3000");
function setScreenshotUrl(url) {
  document.getElementById('target').src = url;
  socket.emit("test",url);
}
