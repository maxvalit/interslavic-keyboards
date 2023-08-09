const sizes = {
    'tab': 'one5',
    'backspace': 'two0',
    '\\': 'one5',
    'caps': 'one75',
    'lshift': 'two75',
    'rshift': 'three',
    'ctrl': 'one25',
    'super': 'one25',
    'alt': 'one25',
    'fn': 'one25',
    'options': 'one25',
    'enter': 'two75',
    'space': 'space'
}

const svgs = {
    'tab': <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M19 12L19.3536 12.3536L19.7071 12L19.3536 11.6464L19 12ZM7 11.5C6.72386 11.5 6.5 11.7239 6.5 12C6.5 12.2761 6.72386 12.5 7 12.5L7 11.5ZM15.3536 16.3536L19.3536 12.3536L18.6464 11.6464L14.6464 15.6464L15.3536 16.3536ZM19.3536 11.6464L15.3536 7.64645L14.6464 8.35355L18.6464 12.3536L19.3536 11.6464ZM19 11.5L7 11.5L7 12.5L19 12.5V11.5Z"
            fill="#222222"/>
    </svg>
    ,
    'lshift': <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M12 5L12.3536 4.64645L12 4.29289L11.6464 4.64645L12 5ZM11.5 17C11.5 17.2761 11.7239 17.5 12 17.5C12.2761 17.5 12.5 17.2761 12.5 17H11.5ZM16.3536 8.64645L12.3536 4.64645L11.6464 5.35355L15.6464 9.35355L16.3536 8.64645ZM11.6464 4.64645L7.64645 8.64645L8.35355 9.35355L12.3536 5.35355L11.6464 4.64645ZM11.5 5L11.5 17H12.5L12.5 5H11.5Z"
            fill="#222222"/>
    </svg>
    ,
    'rshift': <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M12 5L12.3536 4.64645L12 4.29289L11.6464 4.64645L12 5ZM11.5 17C11.5 17.2761 11.7239 17.5 12 17.5C12.2761 17.5 12.5 17.2761 12.5 17H11.5ZM16.3536 8.64645L12.3536 4.64645L11.6464 5.35355L15.6464 9.35355L16.3536 8.64645ZM11.6464 4.64645L7.64645 8.64645L8.35355 9.35355L12.3536 5.35355L11.6464 4.64645ZM11.5 5L11.5 17H12.5L12.5 5H11.5Z"
            fill="#222222"/>
    </svg>
    ,
    'caps': <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 18L12 12L6 18" stroke="#222222"/>
        <path d="M18 12L12 6L6 12" stroke="#222222"/>
    </svg>
    ,
    'backspace': <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M5 12L4.64645 11.6464L4.29289 12L4.64645 12.3536L5 12ZM17 12.5C17.2761 12.5 17.5 12.2761 17.5 12C17.5 11.7239 17.2761 11.5 17 11.5V12.5ZM8.64645 7.64645L4.64645 11.6464L5.35355 12.3536L9.35355 8.35355L8.64645 7.64645ZM4.64645 12.3536L8.64645 16.3536L9.35355 15.6464L5.35355 11.6464L4.64645 12.3536ZM5 12.5H17V11.5H5V12.5Z"
            fill="#222222"/>
    </svg>
    ,
    'enter': <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 12L16 16L12 20" stroke="#222222"/>
        <path d="M13 8L17 8" stroke="#222222" stroke-linecap="round"/>
        <path d="M16 16H8C5.79086 16 4 14.2091 4 12V12C4 9.79086 5.79086 8 8 8H9" stroke="#222222"
              stroke-linecap="round"/>
    </svg>
    ,
    'ctrl': <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 12L5 4" stroke="#222222" stroke-linecap="round"/>
        <path d="M19 20L19 17" stroke="#222222" stroke-linecap="round"/>
        <path d="M5 20L5 16" stroke="#222222" stroke-linecap="round"/>
        <path d="M19 13L19 4" stroke="#222222" stroke-linecap="round"/>
        <path d="M12 7L12 4" stroke="#222222" stroke-linecap="round"/>
        <path d="M12 20L12 11" stroke="#222222" stroke-linecap="round"/>
        <circle cx="5" cy="14" r="2" stroke="#222222" stroke-linecap="round"/>
        <circle cx="12" cy="9" r="2" stroke="#222222" stroke-linecap="round"/>
        <circle cx="19" cy="15" r="2" stroke="#222222" stroke-linecap="round"/>
    </svg>
    ,
    'super': <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="1" fill="#222222"/>
        <path
            d="M16.5 12C16.5 14.7006 15.9516 17.1209 15.0883 18.8475C14.2101 20.604 13.0893 21.5 12 21.5C10.9107 21.5 9.78993 20.604 8.91168 18.8475C8.04839 17.1209 7.5 14.7006 7.5 12C7.5 9.29937 8.04839 6.87912 8.91168 5.15254C9.78993 3.39605 10.9107 2.5 12 2.5C13.0893 2.5 14.2101 3.39605 15.0883 5.15254C15.9516 6.87912 16.5 9.29937 16.5 12Z"
            stroke="#222222"/>
        <path
            d="M14.25 15.897C11.9112 17.2473 9.54102 17.9825 7.61411 18.0982C5.65382 18.2158 4.31743 17.6932 3.77278 16.7499C3.22813 15.8065 3.44375 14.3879 4.52579 12.749C5.58941 11.1381 7.41121 9.45307 9.75002 8.10275C12.0888 6.75243 14.459 6.01723 16.3859 5.90157C18.3462 5.78391 19.6826 6.30651 20.2273 7.24987C20.7719 8.19323 20.5563 9.61187 19.4743 11.2507C18.4106 12.8616 16.5888 14.5467 14.25 15.897Z"
            stroke="#222222"/>
        <path
            d="M14.25 8.10284C11.9112 6.75252 9.54102 6.01732 7.61411 5.90166C5.65382 5.78399 4.31743 6.30659 3.77278 7.24995C3.22813 8.19331 3.44375 9.61196 4.52579 11.2508C5.58941 12.8617 7.41121 14.5467 9.75002 15.8971C12.0888 17.2474 14.459 17.9826 16.3859 18.0982C18.3462 18.2159 19.6826 17.6933 20.2273 16.75C20.7719 15.8066 20.5563 14.3879 19.4743 12.7491C18.4106 11.1382 16.5888 9.45315 14.25 8.10284Z"
            stroke="#222222"/>
    </svg>
    ,
    'space': <></>,
    'alt': <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M9.55563 13.3232L9.43584 13.3123C7.90803 13.1735 7.14412 13.104 6.90146 12.5814C6.65881 12.0588 7.09869 11.4304 7.97846 10.1736L11.5612 5.05544C12.1424 4.22517 12.433 3.81003 12.6836 3.89831C12.9342 3.98658 12.9005 4.4922 12.8331 5.50343L12.6299 8.55194C12.5685 9.47214 12.5379 9.93224 12.8023 10.2419C13.0667 10.5515 13.5259 10.5933 14.4444 10.6768L14.5642 10.6877C16.092 10.8265 16.8559 10.896 17.0985 11.4186C17.3412 11.9412 16.9013 12.5696 16.0215 13.8264L12.4388 18.9446C11.8576 19.7748 11.567 20.19 11.3164 20.1017C11.0658 20.0134 11.0995 19.5078 11.1669 18.4966L11.3701 15.4481C11.4315 14.5279 11.4621 14.0678 11.1977 13.7581C10.9333 13.4485 10.4741 13.4067 9.55563 13.3232Z"
            stroke="#222222"/>
        <path d="M18.5 4L17 6H19L17.5 8" stroke="#7E869E" stroke-opacity="0.25" stroke-linecap="round"
              stroke-linejoin="round"/>
        <path d="M6.5 16L5 18H7L5.5 20" stroke="#7E869E" stroke-opacity="0.25" stroke-linecap="round"
              stroke-linejoin="round"/>
    </svg>,
    'options': <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 7H19" stroke="#222222" stroke-linecap="round"/>
        <path d="M5 12H19" stroke="#222222" stroke-linecap="round"/>
        <path d="M5 17H19" stroke="#222222" stroke-linecap="round"/>
    </svg>


}

export function KeyCap({
                           lower,
                           upper,
                           pressed,
                           shift,
                           type,
                           code,
                           className,
                           modifier,
                           control,
                           hightlight
                       }) {


    let sz = sizes[type]
    const isPressed = pressed[code] ? 'press' : ''
    const modifierClass = modifier ? 'modifier' : ''
    const contolClass = control ? 'control' : ''
    const highlightClass = hightlight ? 'highlight' : ''
    return <div className={`cap ${type} ${sz} ${isPressed} ${className} ${modifierClass} ${contolClass} ${highlightClass}`}>
        {svgs[type] ?? (<span>{type ?? (shift ? upper : lower)}</span>)}

    </div>
}