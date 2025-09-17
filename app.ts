let g = new Grid(10, 10)

let player_o = true
update = () => {
    if (g.activated) {
        g.activeCell.custom = (c) => {
            if (player_o && c.tag != "x" || c.tag == "o") {
                circle(c.x + c.width/2, c.y + c.height/2, c.height/2 - 20, "blue", 5)
                c.tag = "o"
            } else {
                line(c.x + 20, c.y + 20, c.x + c.width - 20, c.y + c.height - 20, "red", 5)
                line(c.x + c.width - 20, c.y + 20, c.x + 20, c.y + c.height - 20, "red", 5)
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