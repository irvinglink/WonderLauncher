// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
extern crate dotenv;

use crate::services::discord::DiscordPresence;
use dotenv::dotenv;
use serde::Deserialize;
// https://crates.io/crates/mc-launcher-core

pub mod services;

fn main() {
    dotenv().ok();
    // Spawn a new thread for Discord Rich Presence
    std::thread::spawn(|| {
        DiscordPresence::start_discord_presence().expect("Error connecting Discord Rich Presence.");
    });

    // Start tauri app
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![login])
        .run(tauri::generate_context!())
        .expect("error while running tauri application.");
}

#[derive(Debug, Deserialize)]
struct LoginCredentials {
    username: String,
    password: String,
    // Add more fields as needed
}

#[tauri::command]
fn login(credentials: LoginCredentials) {
    let username = credentials.username;
    let password = credentials.password;
    println!("Username: {}, Password: {}", username, password);
}

/*
#[tauri::command]
async fn create_window(app: tauri::AppHandle) {
    let window = tauri::WindowBuilder::new(
        &app,
        "label",
        tauri::WindowUrl::External("https://tauri.app/".parse().unwrap()),
    )
    .build()
    .unwrap();
} */
