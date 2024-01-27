use discord_rich_presence::{activity, DiscordIpc, DiscordIpcClient};
use std::{process, thread, time};

use std::env;


pub struct DiscordPresence;

impl DiscordPresence {
    pub fn start_discord_presence() -> Result<(), Box<dyn std::error::Error>> {       
        
        // Discord app id key from .env for Discord Client
        let discord_app_id: String = match env::var("DISCORD_APP_ID") {
            Ok(val) => val,
            Err(err)=> {
                println!("{}: {}", err, "DISCORD_APP_ID");
                process::exit(1)
            }
        };
        
        // Discord app image key from .env
        let discord_app_image: String = match env::var("DISCORD_APP_IMAGE") {
            Ok(val) => val,
            Err(err)=> {
                println!("{}: {}", err, "DISCORD_APP_IMAGE");
                process::exit(1);
            }
        };
        let large_image: &str = discord_app_image.as_str();

        // Starts the discord client
        let mut client: DiscordIpcClient = DiscordIpcClient::new(discord_app_id.as_str())?;
        
        client.connect()?;

        // This loop maintains the discord connection
        loop {

            // Define discord activity "decoration"
            let activity = activity::Activity::new()
                .state("Coming Soon")
                .assets(
                    activity::Assets::new().large_image(large_image)
                    .small_text("Coming Soon \ndeveloped by irvinglink")
            ).buttons(
                vec![activity::Button::new("Repository", "https://github.com/irvinglink/WonderLauncher")]
            );

            if let Err(err) = client.set_activity(activity) {
                eprintln!("Error setting activity: {:?}", err);
                // Handle the error gracefully, e.g., attempt to reconnect
            }

            if should_exit() {
                break;
            }

            thread::sleep(time::Duration::from_secs(10)); // sleep for 10 seconds
        }

        Ok(())
    }
}

fn should_exit() -> bool {
    false
}
