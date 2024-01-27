// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
extern crate dotenv;

use crate::services::discord::DiscordPresence;
use dotenv::dotenv;
use serde::Deserialize;
// Main: https://crates.io/crates/mc-launcher-core

pub mod services;

fn main() {
    // Reads the .env file
    dotenv().ok();

    // Spawn a new thread for Discord Rich Presence
    std::thread::spawn(|| {
        DiscordPresence::start_discord_presence().expect("Error connecting Discord Rich Presence.");
    });

    // Start tauri app
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![login, create_main_window])
        .run(tauri::generate_context!())
        .expect("error while running tauri application.");

}

#[derive(Debug, Deserialize)]
struct LoginCredentials {
    username: String,
    password: String,
}

// invoke("login") from React Framework to retrieve login data
#[tauri::command]
fn login(credentials: LoginCredentials) {
    let username: String = credentials.username;
    let password: String = credentials.password;
    println!("Username: {}, Password: {}", username, password);

    // VALIDATE

}


#[tauri::command]
async fn create_main_window(app: tauri::AppHandle) {
    tauri::WindowBuilder::new(
        &app,
        "label",
        tauri::WindowUrl::App("index.html/#/main".parse().unwrap()), // TODO
    ).decorations(false).inner_size(980.0, 552.0)
    .build()
    .unwrap();


}
