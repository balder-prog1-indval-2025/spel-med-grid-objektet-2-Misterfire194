let g = new Grid(20, 20)

let player_o = true
update = () => {
    if (g.activated) {
        g.activeCell.custom = (c) => {
            if (player_o && c.tag != "x" || c.tag == "o") {
                circle(c.x + c.width/2, c.y + c.height/2, c.height/2, "blue", 5)
                c.tag = "o"
            } else {
                line(c.x, c.y, c.x + c.width, c.y + c.height, "red", 5)
                line(c.x + c.width, c.y, c.x, c.y + c.height, "red", 5)
                c.tag = "x"
            }
            if (c.tag == "x") {
                player_o = true
            } else {
                player_o = false
            }
        }
        
    }
}