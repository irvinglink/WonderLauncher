use discord_rich_presence::{activity, DiscordIpc, DiscordIpcClient};
use std::{process, thread, time};

use std::env;


pub struct DiscordPresence;

impl DiscordPresence {
    pub fn start_discord_presence() -> Result<(), Box<dyn std::error::Error>> {       
        
        let discord_app_id: String = match env::var("DISCORD_APP_ID") {
            Ok(val) => val,
            Err(err)=> {
                println!("{}: {}", err, "DISCORD_APP_ID");
                process::exit(1)
            }
        };
        
        let discord_app_image: String = match env::var("DISCORD_APP_IMAGE") {
            Ok(val) => val,
            Err(err)=> {
                println!("{}: {}", err, "DISCORD_APP_IMAGE");
                process::exit(1)
            }
        };


        let mut client: DiscordIpcClient = DiscordIpcClient::new(discord_app_id.as_str())?;
        
        let large_image: &str = discord_app_image.as_str();
        client.connect()?;

        loop {
            let activity = activity::Activity::new()
                .state("Online")
                .assets(
                    activity::Assets::new().large_image(large_image)
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
