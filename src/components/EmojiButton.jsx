export default function EmojiButton({
    content,
    handleClick,
    selectedCardEntry,
    matchedCardEntry
}) {
    
    const btnContent = selectedCardEntry || matchedCardEntry ? content : "?"

    /**
     * When you're done, there should be hover/focus effects (box-shadow and background-color) on cards lying face-down, animation when cards are turned, and greyed out background on matched cards.
     */
    
    const btnStyle =
        matchedCardEntry ? "btn--emoji__back--matched" :
        selectedCardEntry ? "btn--emoji__back--selected" :
        "btn--emoji__front"
 
    return (
        <button
            className={`btn btn--emoji ${btnStyle}`}
            onClick={handleClick}
        >
            {btnContent}
        </button>
    )
}