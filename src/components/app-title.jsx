function AppTitle({color, text, caps, subtitle}) {

    let style = {
        color: color,
        marginTop: subtitle ? 12 : 24,
        marginBottom: subtitle ? 12 : 24,
        textTransform: caps ? 'uppercase' : '',
        width: '100%',
        textAlign: 'center'
    }

    return subtitle ? <h3 style={style}>{text}</h3> : <h1 style={style}>{text}</h1>;
}

export default AppTitle;
