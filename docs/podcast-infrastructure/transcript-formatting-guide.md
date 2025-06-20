# Transcript Formatting Guide

## Overview

This guide provides best practices for formatting podcast transcripts for the ScopeCreep.zip website. We support two transcript types: Clean and Raw.

## Clean Transcript Guidelines

Clean transcripts are edited for readability while maintaining the essence of the conversation.

### Formatting Rules

1. **Remove Filler Words**
   - Remove: um, uh, like (when used as filler), you know
   - Keep: Natural speech patterns that add meaning

2. **Fix Grammar**
   - Correct minor grammatical errors
   - Complete unfinished sentences
   - Fix word order issues

3. **Punctuation**
   - Use proper punctuation
   - Add paragraph breaks for topic changes
   - Use ellipsis (...) for meaningful pauses

4. **Speaker Labels**
   - Start each speaker's section with their label
   - Format: `[Speaker Name]`
   - Always on a new line

### Example

```markdown
[Kali] Welcome to ScopeCreep.zip! I'm Kali, and today we're diving into malware analysis techniques that every security researcher should know.

[Kat] That's right! We'll also explore how platform engineering principles can enhance your security infrastructure. It's all about building robust, scalable systems.

[Kali] Exactly. Let's start with static analysis...
```

## Raw Transcript Guidelines

Raw transcripts capture exactly what was said, including verbal fillers and timestamps.

### Formatting Rules

1. **Include Everything**
   - All filler words (um, uh, like, you know)
   - False starts and corrections
   - Non-verbal sounds (*laughs*, *sighs*, *pause*)

2. **Timestamps**
   - Format: `[MM:SS]`
   - Add at regular intervals (every 15-30 seconds)
   - Place at the beginning of speaker changes

3. **Speaker Labels**
   - Format: `[Speaker Name]`
   - Always after timestamp if both are present

4. **Verbatim Accuracy**
   - Preserve exact wording
   - Include repeated words
   - Show interrupted speech with dash (-)

### Example

```markdown
[00:00] [Kali] Um, hello everyone! Welcome to, uh, ScopeCreep.zip! I'm Kali, and today we're gonna dive into, like, malware analysis techniques that every security researcher should, you know, know.

[00:15] [Kat] That's right! *laughs* We'll also explore how platform engineering principles can, um, enhance your security infrastructure. It's all about building robust, scalable- well, scalable systems.

[00:28] [Kali] Exactly. So let's start with, uh, static analysis...
```

## Supported Speaker Labels

The following speaker labels are automatically styled:

| Label | Color | Use Case |
|-------|-------|----------|
| `[Kali]` | Pink | Host - Kali |
| `[Kat]` | Cyan | Host - Kat |
| `[Speaker 1]` | Purple | First guest |
| `[Speaker 2]` | Yellow | Second guest |
| `[Guest]` | Coral | Single guest |

## File Format

Transcripts can be included in two ways:

### 1. Inline in Front Matter

```yaml
clean_transcript: |
  [Kali] Welcome to the show...
  
  [Kat] Thanks for having me...

raw_transcript: |
  [00:00] [Kali] Um, welcome to the show...
  [00:05] [Kat] Thanks for, uh, having me...
```

### 2. External Files

```yaml
clean_transcript: "transcripts/episode-001-clean.md"
raw_transcript: "transcripts/episode-001-raw.txt"
```

## Best Practices

### For Clean Transcripts

1. **Maintain Speaker Voice**
   - Keep characteristic phrases
   - Preserve personality
   - Don't over-edit

2. **Improve Clarity**
   - Complete thoughts
   - Fix obvious errors
   - Add context where needed

3. **Format for Scanning**
   - Short paragraphs
   - Clear speaker changes
   - Logical breaks

### For Raw Transcripts

1. **Timestamp Regularly**
   - Every major topic change
   - At least every 30 seconds
   - At speaker changes

2. **Capture Everything**
   - Background sounds
   - Interruptions
   - Technical issues

3. **Be Consistent**
   - Same format throughout
   - Consistent timestamp intervals
   - Same notation for sounds

## Technical Implementation

The transcript formatting is handled by:

1. **`_includes/format-transcript.html`** - Processes speaker labels and timestamps
2. **CSS Classes** - Applies color coding and styling
3. **JavaScript** - Manages view switching in episode cards

## Accessibility Considerations

- Use clear speaker labels for screen readers
- Maintain logical reading order
- Provide both transcript types for different needs
- Ensure sufficient color contrast

## Common Issues and Solutions

### Issue: Long Monologues
**Solution**: Break into paragraphs at natural pauses or topic changes

### Issue: Multiple Speakers Talking
**Solution**: Use `[Multiple]` or `[Crosstalk]` labels

### Issue: Inaudible Sections
**Solution**: Use `[inaudible]` or `[unclear]` notation

### Issue: Technical Terms
**Solution**: Spell out acronyms on first use in clean transcript

## Tools and Workflow

1. **Initial Transcription**
   - Use automated tools for first pass
   - Manual review and correction

2. **Creating Clean Version**
   - Start with raw transcript
   - Apply formatting rules
   - Review for clarity

3. **Quality Check**
   - Read both versions
   - Check speaker label consistency
   - Verify timestamp accuracy