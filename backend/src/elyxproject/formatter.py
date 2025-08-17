import json

def format_conversation_log(
    input_file="store/full_conversation_log.json",
    chat_output_file="store/conversation_whatsapp.txt",
    data_output_file="store/structured_data.json"
):
    """
    Reads the full JSON log and creates two separate output files:
    1. A human-readable WhatsApp-style chat log.
    2. A machine-readable JSON file of all structured data.
    """
    try:
        with open(input_file, 'r') as f:
            log = json.load(f)
    except (FileNotFoundError, json.JSONDecodeError) as e:
        print(f"Error reading log file: {e}")
        return

    chat_entries = []
    data_entries = []

    for entry in log:
        if "speaker" in entry and "message" in entry:
            chat_entries.append(entry)
        elif "data_type" in entry:
            data_entries.append(entry)

    # Write the WhatsApp-style chat file
    with open(chat_output_file, 'w') as f:
        for entry in chat_entries:
            timestamp = entry['timestamp']
            speaker = entry['speaker']
            if "Elyx" not in speaker and speaker != "Rohan Patel":
                speaker = f"{speaker.split(' ')[0]} (Elyx)"
            message = entry['message']
            f.write(f"{timestamp} {speaker}: {message}\n\n")
    
    print(f"Formatted chat log saved to {chat_output_file}")

    # Write the structured data JSON file
    with open(data_output_file, 'w') as f:
        json.dump(data_entries, f, indent=2)

    print(f"Structured data log saved to {data_output_file}")


def create_final_document(
    refined_file="store/conversation_refined.txt",
    final_file="store/final_conversation.txt"
):
    """
    Takes the refined conversation and removes any 'TIME PASSES' markers
    to create the final, clean document for submission.
    """
    print(f"\n--- Creating Final Document from {refined_file} ---")
    try:
        with open(refined_file, 'r') as f:
            lines = f.readlines()
        
        # Filter out the lines containing the time pass markers
        final_lines = [line for line in lines if "***--- TIME PASSES ---***" not in line]

        with open(final_file, 'w') as f:
            f.writelines(final_lines)

        print(f"Final, clean conversation saved to {final_file}")

    except FileNotFoundError:
        print(f"ERROR: Refined conversation file not found at {refined_file}. Cannot create final document.")