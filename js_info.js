/*
 * Aikanime // as Nichan Design
 */
var post_numb = 999;
var posts_upto = true;
function post_infoanime(M) {
  document.write('<!-- Info -->');
  for (var I = 0; I < post_numb; I++) {
    var j, z = M.feed.entry[I],
      E = z.title.$t;
    if (I == M.feed.entry.length) {
      break
    }
    for (var y = 0; y < z.link.length; y++) {
      if ("replies" == z.link[y].rel && "text/html" == z.link[y].type) {
        var C = z.link[y].title,
          B = z.link[y].href
      }
      if ("alternate" == z.link[y].rel) {
        j = z.link[y].href;
        break
      }
    }
    var F = z.published.$t,
      H = F.substring(0, 4),
      J = F.substring(5, 7),
      K = F.substring(8, 10),
      x = new Array;
     x[1] = "Jan", x[2] = "Feb", x[3] = "Mar", x[4] = "Apr", x[5] = "May", x[6] = "Jun", x[7] = "Jul", x[8] = "Aug", x[9] = "Sep", x[10] = "Oct", x[11] = "Nov", x[12] = "Des",
      document.write('<li class="last-post-item">'), document.write('<span class="t1"><a href="' + j + '" target ="_top">' + E + "</a></span>"), 1 == posts_upto && document.write('<span class="t2">' + K + " " + x[parseInt(J, 10)] + " " + H + "</span>");
    var G = "",
      D = 0;
    document.write("<span class='t3'><a href='" + j + "' target ='_blank'>Click here!</a></span></li>")
  }
  document.write("<!-- Nichan Design // as Aikanime -->")
};
