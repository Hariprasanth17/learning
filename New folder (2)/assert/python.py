# import subprocess

# command = subprocess.check_output(['netsh', 'wlan', 'show', 'profiles']).decode
# profiles = [i.split(":")[1][1:-1] for i in command if "All User Profile" in i]
# for i in profiles:
#     results = subprocess.check_output(['netsh', 'wlan', 'show', 'profile', i,
#     results = [b.split(":")[1][1:1] for b in results if "Key Content" in b]
#     try:
#         print ("{:<30}| {:<}".format(i, results[0]))
#     except IndexError
#         print ("(:<30)}| (:<}".format(i, ""))
# input("")
import subprocess

# Get the list of WiFi profiles
command = subprocess.check_output(['netsh', 'wlan', 'show', 'profiles']).decode("utf-8").split("\n")
profiles = [i.split(":")[1][1:-1] for i in command if "All User Profile" in i]

print("\nWiFi Passwords:\n")
for i in profiles:
    try:
        # Get the password for each profile
        results = subprocess.check_output(['netsh', 'wlan', 'show', 'profile', i, 'key=clear']).decode("utf-8").split("\n")
        results = [b.split(":")[1][1:-1] for b in results if "Key Content" in b]
        
        # Print the result
        print("{:<30} | {:<}".format(i, results[0] if results else "No Password"))
    except subprocess.CalledProcessError:
        print("{:<30} | {:<}".format(i, "Error Retrieving"))

input("\nPress Enter to exit...")
